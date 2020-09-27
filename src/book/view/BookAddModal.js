import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

function BookAddModal() {
  const [open, setOpen] = React.useState(false);
  const [file, setFile] = React.useState("");
  const [previewURL, setPreviewURL] = React.useState("");
  const defaultImageUrl = "/images/noImage.png";

  const handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      setFile(file);
      setPreviewURL(reader.result);
    };
    reader.readAsDataURL(file);
  };

  let profile_preview = (
    <Image
      style={{ height: "250px", width: "250px" }}
      className="profile_preview"
      src={previewURL ? previewURL : defaultImageUrl}
    />
  );

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Add Book</Button>}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <div style={{ margin: "5px" }}>
          {profile_preview}
          <input
            style={{ marginTop: "5px" }}
            type="file"
            accept="image/jpg,impge/png,image/jpeg,image/gif"
            name="profile_img"
            onChange={handleFileOnChange}
          />
        </div>
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          돌아가기
        </Button>
        <Button
          content="등록"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default BookAddModal;
