import classes from './Alert.module.scss';

const Alert = ( { children } ) => {
    return(
        <div className={classes.alert}>
            { children }
        </div>
    )
}

export default Alert;