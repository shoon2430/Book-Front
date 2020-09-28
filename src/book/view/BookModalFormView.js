import React from "react";
import { Button, Form, Image, Modal } from "semantic-ui-react";

function BookModalFormView({
  onChangeIsbn,
  onChangeTitle,
  onChangeAuthor,
  onChangePublisher,
  onChangePrice,
  onChangeIntroduce,
  handleFileOnChange,
  profile_preview_imageUrl,
  addBook,
  setModalOpen,
  open,
}) {
  return (
    <Modal
      onClose={() => setModalOpen(false)}
      onOpen={() => setModalOpen(true)}
      open={open}
      trigger={<Button color="facebook">Add Book</Button>}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <div>
          <Image
            style={{ height: "250px", width: "250px" }}
            className="profile_preview"
            src={profile_preview_imageUrl}
          />
          <input
            style={{ marginTop: "5px" }}
            type="file"
            accept="image/jpg,impge/png,image/jpeg,image/gif"
            name="profile_img"
            onChange={handleFileOnChange}
          />
        </div>
        <Modal.Description>
          <Form onSubmit={addBook}>
            <Form.Group>
              <Form.Input
                label="ISBN"
                placeholder="ISBN"
                onChange={onChangeIsbn}
                width={6}
              />
              <Form.Input
                label="Title"
                placeholder="Title"
                onChange={onChangeTitle}
                width={10}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label="Author"
                placeholder="Author"
                onChange={onChangeAuthor}
                width={4}
              />
              <Form.Input
                label="Publisher"
                placeholder="Publisher"
                onChange={onChangePublisher}
                width={6}
              />
              <Form.Input
                label="Price"
                placeholder="Price"
                onChange={onChangePrice}
                width={6}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label="Introduce"
                placeholder="Introduce"
                onChange={onChangeIntroduce}
                width={16}
              />
            </Form.Group>
            <Button type="submit">도서 추가</Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setModalOpen(false)}>
          돌아가기
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default BookModalFormView;
