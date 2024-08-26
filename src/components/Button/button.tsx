import React,{ FC,ButtonHTMLAttributes,AnchorHTMLAttributes} from 'react'
import classNames from 'classnames';

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}
export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}
interface BaseButtonProps {
    href?:string;
    className?:string;
    disabled?:boolean;
    size?:ButtonSize;
    btnType?:ButtonType;
    children:React.ReactNode
}
//button标签原生的html属性
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
//连接a元素的html属性
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
//设置这些属性为可选属性
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

export const Button:FC<ButtonProps> = (props) => {
    const {href,className,disabled,size,btnType,children,...resetProps } = props;
    const classes = classNames('btn',className,{
        [`btn-${btnType}`]:btnType,
        [`btn-${size}`]:size,
        'disabled':(btnType === ButtonType.Link) && disabled
    });
    if(btnType === ButtonType.Link && href) {
        return (
            <a
                href={href}
                {...resetProps}
                className={classes}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button
                {...resetProps}
                disabled={disabled}
                className={classes}
            >
                {children}
            </button>
        )
    }
}

Button.defaultProps = {
    disabled:false,
    btnType:ButtonType.Default
}

export default Button;



