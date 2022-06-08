export const Icon  = ({width, height, borderRadiusFalse, src, alt, style}) => {
    return <div style={{width: width, height: height, maxHeight: height, borderRadius: borderRadiusFalse ? '0' : '50%', overflow: 'hidden'}}>
        <img src={src} alt={alt} className='icon' style={{...style, width: width, maxWidth: width, maxHeight: height}}/>
    </div>
}