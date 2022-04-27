import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import Swal from "sweetalert2";
import useTitle from "../../../Hooks/useTitle";

const Donate = () => {
  const navigate = useNavigate();
  useTitle("Donate");
  const { donateTitle } = useParams();
  const [inputDonate, setInputDonate] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    transaction: "",
  });

  /* handle donate form */
  const handleDonateForm = async (event) => {
    event.preventDefault();
    if (!inputDonate.name)
      return toast.error("Name field required", { position: "top-center" });
    if (!inputDonate.phone)
      return toast.error("phone field required", { position: "top-center" });
    if (!inputDonate.amount)
      return toast.error("amount field required", { position: "top-center" });
    if (!inputDonate.transaction)
      return toast.error("transaction field required", {
        position: "top-center",
      });

    const donateData = {
      name: inputDonate.name,
      email: inputDonate.email,
      phone: inputDonate.phone,
      amount: inputDonate.amount,
      transaction: inputDonate.transaction,
      donateCase: donateTitle,
    };
    console.log(donateData);
    Swal.fire(
      "Thanks for your donation!",
      "We call you to confirmation soon!",
      "success"
    ).then((res) => {
      if (res.isConfirmed) {
        event.target.reset();
        navigate("/donations");
      }
    });
  };

  return (
    <DonateContainer>
      <div className="container">
        <h1>Donate {donateTitle}</h1>
        <div className="form">
          <form action="" className="form-wrapper" onSubmit={handleDonateForm}>
            <div className="group">
              <div className="input-group">
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  id="name"
                  onChange={(event) =>
                    setInputDonate({ ...inputDonate, name: event.target.value })
                  }
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email (optional)</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  id="email"
                  onChange={(event) =>
                    setInputDonate({
                      ...inputDonate,
                      email: event.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                placeholder="Your Phone"
                id="phone"
                onChange={(event) =>
                  setInputDonate({ ...inputDonate, phone: event.target.value })
                }
              />
              <small>
                Don't share anybody We just confirm you as if we got your
                donate.
              </small>
            </div>
            <div className="input-group">
              <label htmlFor="donate">Donate Case</label>
              <input
                type="text"
                defaultValue={donateTitle}
                id="donate"
                readOnly
              />
            </div>
            <div className="input-group">
              <label htmlFor="money">Donation Amount</label>
              <input
                type="text"
                name="money"
                placeholder="Donation Amount"
                id="money"
                onChange={(event) =>
                  setInputDonate({ ...inputDonate, amount: event.target.value })
                }
              />
            </div>
            <div className="input-group">
              <label htmlFor="transaction">Transaction ID</label>
              <input
                type="text"
                name="transaction"
                placeholder="Transaction ID"
                id="transaction"
                onChange={(event) =>
                  setInputDonate({
                    ...inputDonate,
                    transaction: event.target.value,
                  })
                }
              />
              <small>
                After donate successfully done you get a Transaction ID of reply
                message
              </small>
            </div>

            <div className="input-group">
              <ul>
                <li>
                  Bkash (send money) - <strong>017847457452</strong>
                </li>
                <li>
                  Nagad (send money) - <strong>017847457452</strong>
                </li>
                <li>
                  Bank Account- <strong>45557677875554</strong>
                </li>
              </ul>
            </div>
            <div className="input-group">
              <button className="btn btn-primary">Donate Please</button>
            </div>
          </form>
        </div>
      </div>
    </DonateContainer>
  );
};
const DonateContainer = styled.section`
  position: relative;
  padding: 1rem;
  margin: 1rem;
  .form {
    background: var(--accent-color);
    padding: 2rem;
    margin: 1rem 0rem;
    .group {
      display: flex;
      align-items: center;
      gap: 1rem;
      position: relative;
    }
    .input-group {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      position: relative;
      margin-bottom: 1rem;
      width: 100%;
      input {
        padding: 1rem;
        font-size: 1rem;
        font-family: var(--montserrat);
        border: 1px solid #ccc;
        outline: none;
        border-radius: 5px;
      }
      ul {
        position: relative;
        margin: 1rem 0rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
    }
  }
`;
export default Donate;
