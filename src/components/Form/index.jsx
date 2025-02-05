import { useContext, useState } from "react";
import { UserDataContext } from "../../context/UserDataContext";
import { IoMdInformationCircleOutline } from "react-icons/io";

export default function Form() {
  const { userData, setUserData, setConfirm } = useContext(UserDataContext);
  const [errors, setErrors] = useState({
    avatar: "",
    fullName: "",
    email: "",
    githubUser: "",
  });

  function validate() {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!userData.avatar) newErrors.avatar = "Select a photo";
    if (userData.avatar)
      if (userData.avatar.size > 512000)
        newErrors.avatar = "File too large. Please upload a photo under 500KB";
    if (!userData.fullName) newErrors.fullName = "Can't be blank";
    if (!emailRegex.test(userData.email))
      newErrors.email = "Please enter a valid email address";
    if (!userData.email) newErrors.email = "Can't be blank";
    if (!userData.githubUser.startsWith("@"))
      newErrors.githubUser = "Wrong format, start with '@'";
    if (!userData.githubUser) newErrors.githubUser = "Can't be blank";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleTextChange(event) {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file.type === "image/png" || file.type === "image/jpeg") {
      setUserData((prevData) => ({
        ...prevData,
        avatar: file,
        preview: URL.createObjectURL(file),
      }));
    }
  }

  function handleFileDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files[0];
    if (file.type === "image/png" || file.type === "image/jpeg") {
      setUserData((prevData) => ({
        ...prevData,
        avatar: file,
        preview: URL.createObjectURL(file),
      }));
    }
  }

  function handleDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validate()) setConfirm(true);
  }

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-4 text-center sm:text-xl sm:w-80">
        Your Jorney to Coding Conf <br /> 2025 Starts Here!
      </h1>
      <p className="text-xl mb-12 text-neutral_300 sm:w-80 sm:text-center sm:text-lg">
        Secure your spot at next year's biggest coding conference.
      </p>
      <form className="w-96 sm:w-80" onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4">
          <label className="mb-1" htmlFor="avatar">
            Upload Avatar
          </label>
          {!userData.avatar ? (
            <label
              className="flex flex-col items-center bg-neutral-300 bg-opacity-10 rounded-lg border-dashed border-neutral_500 border-2 p-4 cursor-pointer mb-2"
              htmlFor="avatar"
              onDrop={handleFileDrop}
              onDragOver={handleDragOver}
            >
              <img
                className="bg-neutral-500 bg-opacity-20 p-2 rounded-xl mb-2 border-[1px] border-neutral-500 border-opacity-30 w-12 h-12"
                src="assets/images/icon-upload.svg"
                alt="upload icon"
              />
              <p className="text-neutral_300 sm:text-sm">
                Drag and drop or click to upload
              </p>
            </label>
          ) : (
            <div className="flex flex-col items-center bg-neutral-300 bg-opacity-10 rounded-lg border-dashed border-neutral_500 border-2 p-4 mb-2">
              <img
                className="bg-neutral-500 bg-opacity-20 rounded-xl mb-2 border-[1px] border-neutral-500 border-opacity-30 w-12 h-12"
                src={userData.preview}
                alt="avatar"
              />
              <div className="flex gap-2 text-xs text-neutral_300">
                <button
                  onClick={() =>
                    setUserData((prevData) => ({
                      ...prevData,
                      avatar: null,
                      preview: "",
                    }))
                  }
                  className="py-1 px-2 cursor-pointer rounded bg-neutral_500 bg-opacity-20"
                >
                  Remove Image
                </button>
                <label
                  className="py-1 px-2 cursor-pointer rounded bg-neutral_500 bg-opacity-20"
                  htmlFor="avatar"
                >
                  Change Image
                </label>
              </div>
            </div>
          )}

          {!errors.avatar ? (
            <span className="flex items-center gap-1 text-xs text-neutral_300">
              <IoMdInformationCircleOutline /> Upload your photo (JPG or PNG,
              max size: 500KB).
            </span>
          ) : (
            <span className="flex items-center gap-1 text-xs text-orange_700">
              <IoMdInformationCircleOutline /> {errors.avatar}
            </span>
          )}

          <input
            className="hidden"
            id="avatar"
            type="file"
            accept=".png, .jpg"
            name="avatar"
            onChange={handleFileChange}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-1" htmlFor="full-name">
            Full Name
          </label>
          <input
            className={`bg-neutral-500 bg-opacity-10 rounded-lg ${
              errors.fullName ? "border-orange_500" : "border-neutral_500"
            } border-[1px] py-3 px-4`}
            id="full-name"
            type="text"
            name="fullName"
            onChange={handleTextChange}
            value={userData.fullName}
          />
          {errors.fullName ? (
            <span className="text-orange_700 text-xs mt-2">
              {errors.fullName}
            </span>
          ) : null}
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-1" htmlFor="email">
            Email Address
          </label>
          <input
            className={`bg-neutral-500 bg-opacity-10 rounded-lg ${
              errors.fullName ? "border-orange_500" : "border-neutral_500"
            } border-[1px] py-3 px-4`}
            id="email"
            type="text"
            placeholder="example@email.com"
            name="email"
            onChange={handleTextChange}
            value={userData.email}
          />
          {errors.email ? (
            <span className="text-orange_700 text-xs mt-2">{errors.email}</span>
          ) : null}
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-1" htmlFor="github-user">
            GitHub Username
          </label>
          <input
            className={`bg-neutral-500 bg-opacity-10 rounded-lg ${
              errors.fullName ? "border-orange_500" : "border-neutral_500"
            } border-[1px] py-3 px-4`}
            id="github-user"
            type="text"
            placeholder="@yourusername"
            name="githubUser"
            onChange={handleTextChange}
            value={userData.githubUser}
          />
          {errors.githubUser ? (
            <span className="text-orange_700 text-xs mt-2">
              {errors.githubUser}
            </span>
          ) : null}
        </div>
        <button className="bg-orange_500 rounded-lg p-2 w-full text-neutral_900 font-extrabold">
          Generate My Ticket
        </button>
      </form>
    </section>
  );
}
