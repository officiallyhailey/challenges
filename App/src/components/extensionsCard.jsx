function ExtensionCard({ extension, onToggle, onRemove }) {
    return (
        <div className='dataList'>
            <div className='data'>
                <img src={extension.logo} alt={extension.name} className='dataLogo' />
                <div className='dataText'>
                    <h2 className='dataName'>{extension.name}</h2>
                    <p className='dataDescription'>{extension.description}</p>
                </div>
            </div>
            <div className='dataModify'>
                <button className='removeBtn' onClick={() => onRemove(extension.name)}>Remove</button>
                <label className="toggleSwitch">
                    <input type="checkbox" checked={extension.isActive} onChange={() => onToggle(extension.name)} />
                    <span className="slider"></span>
                </label>
            </div>
        </div>
    );
}

export default ExtensionCard;