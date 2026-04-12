import devlens from '../images/logo-devlens.svg'
import styleSpy from '../images/logo-style-spy.svg'
import speedBoost from '../images/logo-speed-boost.svg'
import jsonWizard from '../images/logo-json-wizard.svg'
import tabMaster from '../images/logo-tab-master-pro.svg'
import viewportBuddy from '../images/logo-viewport-buddy.svg'
import markupNotes from '../images/logo-markup-notes.svg'
import gridGuides from '../images/logo-grid-guides.svg'
import palettePicker from '../images/logo-palette-picker.svg'
import linkChecker from '../images/logo-link-checker.svg'
import domSnapshot from '../images/logo-dom-snapshot.svg'
import consolePlus from '../images/logo-console-plus.svg'

const logoMap = {
    'DevLens': devlens,
    'StyleSpy': styleSpy,
    'SpeedBoost': speedBoost,
    'JSONWizard': jsonWizard,
    'TabMaster Pro': tabMaster,
    'ViewportBuddy': viewportBuddy,
    'Markup Notes': markupNotes,
    'GridGuides': gridGuides,
    'Palette Picker': palettePicker,
    'LinkChecker': linkChecker,
    'DOM Snapshot': domSnapshot,
    'ConsolePlus': consolePlus,
}

function ExtensionCard({ extension, onToggle, onRemove }) {
    return (
        <div className='dataList'>
            <div className='data'>
                <img src={logoMap[extension.name]} alt={extension.name} className='dataLogo' />
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