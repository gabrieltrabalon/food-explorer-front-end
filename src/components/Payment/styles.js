import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.4rem;

    width: 100%;
`
export const Content = styled.main`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .8rem;
    
    font-size: 2rem;

    border: .1rem solid ${({ theme }) => theme.COLORS.LIGHT_700};
    border-radius: .8rem;
    
    .payment {
        width: 100%;
        
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;

        .method {
            width: 100%;

            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
    
            min-height: 4rem;

            border-bottom: .1rem solid ${({ theme }) => theme.COLORS.LIGHT_700};
            
            &:nth-child(1){
                border-top-left-radius: .8rem;
                padding: 3rem;
            }

            &:nth-child(2){
                border-left: .1rem solid ${({ theme }) => theme.COLORS.LIGHT_700};
                border-top-right-radius: .8rem;
                padding: 3rem;
            }
        }

        .active {
            background-color: ${({ theme }) => theme.COLORS.DARK_600};
        }

        
    }
    
    .paymentMethod {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        gap: 2rem;

        padding: 2rem;

        width: 100%;
        min-height: 40rem;

        input {
            display: flex;

            width: 100%;
            height: 100%;

            justify-content: center;
            align-items: center;
        }

        input[type=number]::-webkit-outer-spin-button,
        input[type=number]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        input[type=number] {
            -moz-appearance: textfield;
        }
        
        .cardInformation{
            width: 100%;
            justify-content: center;
            padding: 0 7rem 0 7rem;
            label {
                display: flex;
                flex-direction: column;
            }

            > div {
                display: flex;
                gap: 5.3rem
            }
        }
    }

    button {
        left: clamp(5.9rem, 15vw, 7.9rem);
        bottom: 0;

        width: 75%;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        transition: color 1s ease;
        
        &:hover {
            color: ${({ theme }) => theme.COLORS.CAKE_200};
        }

    }

    .button {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        &:hover {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }

    span {
        display: flex;

        width: 100%;
        height: 100%;

        text-align: center;
        justify-content: center;
        align-items: center;

        padding: 2rem;
    }
`