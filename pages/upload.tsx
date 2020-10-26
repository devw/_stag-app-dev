const onSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  const files = e.target.querySelector("input[type='file']").files;
  for(const file of files) {
    formData.append(file.name, file);
  }
  fetch('./api/upload', {method: "POST", body: formData})
}

const Upload = () => (
  <div>
    <h1>File upload</h1>
    <form onSubmit={onSubmit}>
      <input type="file" multiple />
      <button type="submit">Upload files</button>
    </form>
  </div>
);

export default Upload;
