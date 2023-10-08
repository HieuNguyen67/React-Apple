import * as React from "react";

import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListSubheader from "@mui/joy/ListSubheader";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import ColorLensRoundedIcon from "@mui/icons-material/ColorLensRounded";
import iphonetitan from "../assets/image/Logo1.png";

export default function ColorInversionFooter() {
  const [color, setColor] = React.useState("neutral");
  return (
    <Sheet
      variant="solid"
      color={color}
      invertedColors
      sx={{
        ...(color !== "neutral" && {
          bgcolor: `${color}.800`,
        }),
        flexGrow: 1,
        p: 2,
        borderRadius: { xs: 0, sm: "sm" },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        
        <Divider orientation="vertical" />
        <IconButton variant="plain">
          <FacebookRoundedIcon />
        </IconButton>
        <IconButton variant="plain">
          <GitHubIcon />
        </IconButton>
        <Input
          variant="soft"
          placeholder="Type in your email"
          type="email"
          name="email"
          endDecorator={
            <IconButton variant="soft" aria-label="subscribe">
              <SendIcon />
            </IconButton>
          }
          sx={{ ml: "auto", display: { xs: "none", md: "flex" } }}
        />
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { md: "flex-start" },
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Card
          variant="outlined"
          size="sm"
          sx={{
            flexDirection: { xs: "row", md: "column" },
            minWidth: { xs: "100%", md: "auto" },
            gap: 1,
          }}
        >
          
          
            <img
              alt=""
              src={iphonetitan} style={{width:"50px",height:"50px"}}
            /><h1>Review Official</h1>
          
          
        </Card>
        <List
          size="sm"
          orientation="horizontal"
          wrap
          sx={{
            flexGrow: 0,
            "--ListItem-radius": "8px",
            "--ListItem-gap": "0px",
          }}
        >
          <ListItem nested sx={{ width: { xs: "50%", md: 140 } }}>
            <ListSubheader>Menu</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton>Apple</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Xiaomi</ListItemButton>
              </ListItem>
              
            </List>
          </ListItem>
          
        </List>
      </Box>
    </Sheet>
  );
}
