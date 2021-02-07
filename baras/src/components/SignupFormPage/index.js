import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState();
  const [quote, setQuote] = useState("");
  const [description, setDescription] = useState("");
  const [privateAccount, setPrivateAccount] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const onChangeCheck = (e) => {
    if (privateAccount) {
      setPrivateAccount(false);
    } else {
      setPrivateAccount(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({
          email,
          username,
          password,
          photo,
          quote,
          description,
          privateAccount,
        })
      ).catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  function changePhoto(data) {
    let fileread = new FileReader();
    // if (data) {
    // console.log(data);
    // let photourl = window.URL.createObjectURL(data);
    // console.log(photourl);
    // setPhoto(photourl);
    // fileread.addEventListener("load", function () {
    //   let dec = btoa(fileread.result);
    //   fileread.readAsDataURL(data);
    //   setPhoto(data);
    // });
    // console.log("dataaaaa");
    // console.log(photo);
    //  document.getElementById("pho").setAttribute("src", e.target.result);
    // setPhoto(e.target.result);
    // console.log(photo, "NOW");
    // if (data) fileread.readAsBinaryString(data);
  }
  // console.log(photo);
  //  console.log("after", photo);
  // }
  // }
  // console.log(photo);
  return (
    <form onSubmit={handleSubmit}>
      <img src={photo} alt="" />
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>
        Username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Email
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Photo
        <input
          type="file"
          // value={photo}
          name="file"
          onChange={(e) => changePhoto(e.target.files[0])}
        />
      </label>
      <label>
        Quote
        <input
          type="text"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
        />
      </label>
      <label>
        Description
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        Confirm Password
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      <label>
        Private Account
        <input
          type="checkbox"
          checked={privateAccount}
          onChange={onChangeCheck}
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupFormPage;
