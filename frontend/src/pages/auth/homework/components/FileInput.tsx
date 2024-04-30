import styled from "styled-components";

const Container = styled.div``;

const FileInputContainer = styled.div`
  display: flex;
  margin: 8px 0;
  align-items: center;

  transition: all 0.4s ease 0s;
  background-color: var(--secondary);

  &:hover {
    background-color: var(--secondaryWithOpacity);
    & h4 {
      color: var(--whiteWithOpacity);
    }
  }
  input[type="file"] {
    display: none;
  }
`;

const FileSize = styled.p`
  margin: 10px;
  display: flex;
  font-weight: 500;
  color: var(--white);
  font-size: var(--small-m);
  margin-left: auto;
`;

const FileLabel = styled.label`
  cursor: pointer;
  margin: 10px;
  flex-grow: 1;
  padding-left: 10px;
  font-weight: 500;
  color: var(--white);
  font-size: var(--small-m);
`;

function FileInput({ formik }: any) {
  return (
    <Container className="w3-animate-left">
      <FileInputContainer>
        <FileLabel htmlFor="file">
          {formik.values.file?.name
            ? formik.values.file?.name
            : "Choose a file"}
        </FileLabel>
        <input
          id="file"
          type="file"
          name="file"
          onChange={(event) => {
            if (
              event.currentTarget.files &&
              event.currentTarget.files.length > 0
            ) {
              formik.setFieldValue("file", event.currentTarget.files[0]);
            }
          }}
        />
        <FileSize>
          {(formik.values.file?.size &&
            (formik.values.file?.size < 1024 * 1024
              ? (formik.values.file?.size * 0.001).toFixed(2) + " KB"
              : (formik.values.file?.size * 0.000001).toFixed(2) + " MB")) ||
            "Unknown"}
        </FileSize>
      </FileInputContainer>
    </Container>
  );
}

export default FileInput;
