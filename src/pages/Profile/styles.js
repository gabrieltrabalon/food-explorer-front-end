import styled from 'styled-components'

export const Container = styled.div`
    max-width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10rem auto;
    grid-template-areas: 
    'header'
    'content'
    'footer';
    
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    margin: auto;
`

export const Content = styled.main`
    position: relative;
    

    display: flex;
    flex-direction: column;
    margin: 0 auto;
    

    padding: 2rem;
    border-radius: 1.6rem;

    
`

export const BackButtonContainer = styled.div`
    margin-bottom: -20rem;
    display: flex;
    justify-content: flex-start;
`;

export const Avatar = styled.div`
    position: relative;

    width:  18.6rem;
    height: 18.6rem;

    margin: 1rem auto 5.2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > img{
        position: absolute;
        top: 8rem;
        margin-top: 10rem;

        width: 16rem;
        height: 16rem;

        

        border-radius: 50%;
        border: 2px white solid;

        object-fit: cover;
    }

    label{
        width: 4.8rem;
        height: 4.8rem;
        
        background: ${({ theme }) => theme.COLORS.CAKE_200};

        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
     
        position: absolute;
        bottom: -16rem;
        right: 1rem;

        input {
            display: none;
        }

        svg {
            width: 2rem;
            height: 2rem;
            
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    height: 60.5rem;
    width: 40rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    padding: 2rem;
    border-radius: 1.6rem;

    fieldset {
        border: none;
        
        margin-top: 6rem;
        
        legend {
            border: none;

            text-align: center;

            margin-bottom: 3.2rem;
        }

        span {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .6rem;

            cursor: pointer;

            margin-bottom: 1rem;
        }
    }
`