import React from "react";
import { TextField, List, ListItem, ListItemText } from "@mui/material";

const items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
  { id: 5, name: "Item 5" }
];

class MuiList extends React.Component {
  state = {
    searchTerm: ""
  };

  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div>
        <TextField label="Search" />
        <List></List>
      </div>
    );
  }
}

export default MuiList;
