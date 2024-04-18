interface Props{
    onClickButton: () => void;
    buttonTheme?: string; //? for optional
    children: string;
}

const Button = ({ onClickButton, children, buttonTheme = "primary"}: Props) => {
    return(
        <button type="button" className={'btn btn-' + buttonTheme} onClick={onClickButton}>{children}</button>
    );

}

export default Button;