import styled from "styled-components";

const FormContainer = styled.section`
    position:relative;
    display: grid;
    place-items: center;
    min-height: 80vh;
    .form{
        width: 450px;
        padding: 2rem;
        position: relative;
        box-shadow: 0px 0px 5px rgba(0,0,0,0.08);
        border-radius: 5px;
        border: 1px solid #ddd;
        @media (max-width: 768px) {
            width: 100%;
            margin: 0rem 1rem;
        }
        .form-wrapper{
            margin: 1rem 0rem;
            .input-group{
                position: relative;
                display: flex;
                flex-direction: column;
                gap: .3rem;
                margin-bottom: 1rem;
                input{
                    width: 100%;
                    padding: .8rem;
                    font-size: 1rem;
                    font-family: var(--montserrat);
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    outline: none;
                }
            }
            button{
                margin: 0px;
            }
            p.line{
                position: relative;
                margin: 1rem 0rem;
                text-align: center;
                &::after,&::before{
                    content: "";
                    width: 45%;
                    height: 1px;
                    background-color: #ccc;
                    display: block;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                }
                &::before{
                    right: 0%;
                }
            }
            .social-login{
                display: flex;
                align-items: center;
                gap: 4rem;
                border: 1px solid #ccc;
                padding: 0rem;
                border-radius: 50px;
                cursor: pointer;
            }
            p{
                margin: 1rem 0rem;
            }
        }

    }

`

export { FormContainer };

