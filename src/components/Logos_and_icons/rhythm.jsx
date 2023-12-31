


function Rhythm(props) {
    const {width, height, color}= props;
    return (
        <svg style={{width: width ? width : '16px',
                    height: height ? height : '20px'}} 
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"> 
            <path style={{fill: color ? color : '#999'}} fillRule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/>
        </svg>
    )
}

export default Rhythm;