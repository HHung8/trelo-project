import Box from "@mui/material/Box";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "~/utils/sorts";
import { 
    DndContext,
    // PointerSensor,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors,
    DragOverlay,
    defaultDropAnimationSideEffects,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useEffect, useState } from "react";

import Column from "./ListColumns/Column/Column";
import Card from "./ListColumns/Column/ListCards/Card/Card";

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

const BoardContent = ({ board }) => {
  // Nếu dùng pointerSensor mặc định thì phải kết hợp với thuộc tính Css touch-active: none ở những phần tử kéo thả
  // const pointerSensor = useSensor(PointerSensor, {activationConstraint: {distance: 10}})

  // Yêu cầu chuột di chuyển 10px thì mới kích hoạt event, fix trường hợp click bị gọi event
  const mouseSensor = useSensor(MouseSensor, {activationConstraint: {distance: 10}})

  // Nhấn giữ 250ms và dung sai của cảm ứng 500px thì mới kich hoạt event
  const touchSenser = useSensor(TouchSensor, {activationConstraint : {delay: 250, tolerance: 500}})
  
  // const sensors = useSensors(pointerSensor);
  const sensors = useSensors(mouseSensor, touchSenser);

  const [orderedColumns, setOrderedColumns] = useState([]);
  
  //Cùng 1 thời điểm chỉ có một phần tử đang được kéo (column hoặc card) 
  const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)

  useEffect (() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  // Khi bắt đầu kéo 1 phần tử
  const handleDragStart = (event) => {
      // console.log('handleDragStart', event)
      setActiveDragItemId(event?.active?.id)
      setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
      setActiveDragItemData(event?.active?.data?.current) 
  }

  // Trigger khi kết thúc hành động kéo(drag) 1 phần tử => hành động thả (drop)
  const handleDragEnd = (event) => {  
    // console.log('handleDragEnd', event)
    const {active, over} = event   

    // Kiểm tra nếu không tồn tại over(kéo linh tinh ra ngoài thì return luôn tránh lỗi)
    if(!over) return

    // Nếu vị trí sau khi kéo thả khác với vị trí ban đầu
    if(active.id !== over.id) {
        // Lấy vị trí cũ từ thằng active
        const oldIndex = orderedColumns.findIndex(c => c._id === active.id);
        // Lấy vị trí mới từ thành over
        const newIndex = orderedColumns.findIndex(c => c._id === over.id);
        // Dùng ArrayMove của thằng dnd-kit để sắp xếp lại Column ban đầu
        const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
        // 2 Cái console.log dữ liệu này sau dùng để xử lý gọi API
        // const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
        // console.log('dndOrderedColumns: ', dndOrderedColumns)
        // console.log('dndOrderedColumnsIds: ', dndOrderedColumnsIds)
        
        // Cập nhập lại state columns ban đầu sau khi đã kéo thả
        setOrderedColumns(dndOrderedColumns)
    }
    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
  } 
  
  const customDropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({styles: { active: { opacity: '0.5'}}})
  }
     
  return (
    <DndContext 
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd} 
    >
      <Box
        sx={{
          bgcolor: (theme) => theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
          width: "100%",
          height: (theme) => theme.trello.boardContentHeight,
          p: "10px 0",
        }}
      >
        <ListColumns columns={orderedColumns} />
        <DragOverlay dropAnimation={customDropAnimation}>
            {!activeDragItemType && null}
            {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) && <Column column={activeDragItemData} />}
            {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) && <Card card={activeDragItemData} />}
        </DragOverlay>
      </Box>  
    </DndContext>
  );
};
export default BoardContent;
