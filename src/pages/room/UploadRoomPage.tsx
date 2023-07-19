import styled from "styled-components";
import { useForm } from "react-hook-form";
import useProtect from "../../hooks/useProtect";
import useHostOnly from "../../hooks/useHostOnly";

export default function UploadRoomPage() {
  useProtect();
  useHostOnly();
  return (
    <UploadRoomSection>
      <h1>Upload room</h1>
      <UploadRoomForm>
        <div id="name" className="input-box">
          <label htmlFor="">Name</label>
          <input type="text" />
        </div>
        <div id="price-per-night" className="input-box">
          <label htmlFor="">Price per night</label>
          <input type="text" />
        </div>
      </UploadRoomForm>
    </UploadRoomSection>
  );
}

const UploadRoomSection = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-bottom: 1em;
    font-size: 2.5rem;
  }
`;

const UploadRoomForm = styled.form`
  width: 100%;
  max-width: 500px;
  height: fit-content;

  .input-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      display: inline-block;
      align-self: flex-start;
      margin-bottom: 0.5em;
      font-size: 1rem;
    }

    input {
      padding-left: 1em;
      font-size: 1rem;
      width: 100%;
      min-height: 50px;
      border: 1px solid ${({ theme }) => theme.color.darkgray};
      border-radius: 6px;
    }
  }
`;
