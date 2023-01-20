import Dropzone from "react-dropzone";
import { Controller } from "react-hook-form";
import Paper from "@mui/material/Paper";
import CloudUpload from "@mui/icons-material/CloudUpload";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InsertDriveFile from "@mui/icons-material/InsertDriveFile";

export const FileInput = ({ control, name }) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ onChange, onBlur, value }) => (
        <>
          <Dropzone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <Paper
                variant="outlined"
                sx={{
                  backgroundColor: "#eee",
                  textAlign: "center",
                  cursor: "pointer",
                  color: "#333",
                  padding: "10px",
                  marginTop: "20px",
                }}
                {...getRootProps()}
              >
                <CloudUpload
                  sx={{ marginTop: "16px", color: "#888888", fontSize: "42px" }}
                />
                <input {...getInputProps()} name={name} onBlur={onBlur} />
                <p>Drag 'n' drop files here, or click to select files</p>
              </Paper>
            )}
          </Dropzone>
          <List>
            {value.map((f, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <InsertDriveFile />
                </ListItemIcon>
                <ListItemText primary={f.name} secondary={f.size} />
              </ListItem>
            ))}
          </List>
        </>
      )}
    />
  );
};
