import classes from './Textarea.module.scss';

const Textarea = ( props ) => {
    return(
        <textarea className={classes.textarea} { ...props } ></textarea>
    )
}

export default Textarea;