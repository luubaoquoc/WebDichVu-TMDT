import { useState } from "react";
import Swal from "sweetalert2";
import {
  ModalBackground,
  ModalContent,
  CloseButton,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "./styleCreateProduct";

const CreateProductModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    product_name: "",
    product_brand: "",
    product_category: "",
    product_price: "",
    product_countInStock: "",
    product_image: null,
    product_description: "",
  });

  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "product_image") {
      const file = files[0];
      setFormData((prev) => ({
        ...prev,
        product_image: file,
      }));

      // 👇 tạo URL preview
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      for (let key in formData) {
        data.append(key, formData[key]);
      }

      await onSubmit(data); // truyền FormData
      Swal.fire("Thành công!", "Tạo sản phẩm thành công!", "success");
      onClose();
    } catch (error) {
      Swal.fire("Lỗi", "Tạo sản phẩm thất bại!", "error");
    }
  };

  return (
    <ModalBackground>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>Create new product</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Product Name</Label>
            <Input
              type="text"
              name="product_name"
              value={formData.product_name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Brand</Label>
            <Input
              type="text"
              name="product_brand"
              value={formData.product_brand}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Category</Label>
            <Input
              type="text"
              name="product_category"
              value={formData.product_category}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Price</Label>
            <Input
              type="number"
              name="product_price"
              value={formData.product_price}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Stock Quantity</Label>
            <Input
              type="number"
              name="product_countInStock"
              value={formData.product_countInStock}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Image</Label>
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                style={{
                  width: "100px",
                  height: "auto",
                  marginBottom: "10px",
                  borderRadius: "6px",
                  objectFit: "cover",
                }}
              />
            )}
            <Input
              type="file"
              name="product_image"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Description</Label>
            <Input
              type="text"
              name="product_description"
              value={formData.product_description}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <Button type="submit">Create</Button>
        </Form>
      </ModalContent>
    </ModalBackground>
  );
};

export default CreateProductModal;
