import {Card as MuiCard} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import GroupIcon from "@mui/icons-material/Group";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import AttachmentIcon from "@mui/icons-material/Attachment";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Card = ({card}) => {
  
  return (
    <MuiCard
    sx={{
      cursor: "pointer",
      boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
      overflow: "unset",
    }}>
    {card?.cover && 
    <CardMedia sx={{ height: 140 }} image={card?.cover} />}
    <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
      <Typography>{card?.title}</Typography>
    </CardContent>
    <CardActions sx={{ p: "0 4px 8px 4px" }}>
      <Button size="small" startIcon={<GroupIcon />}>
        20
      </Button>
      <Button size="small" startIcon={<InsertCommentIcon />}>
        15
      </Button>
      <Button size="small" startIcon={<AttachmentIcon />}>
        10
      </Button>
    </CardActions>
  </MuiCard>
  )
}

export default Card