
const  fullDarkModeCheckBox = document.querySelector('#full-dark-mode');
const  containerDarkModeCheckBox = document.querySelector('#contained-dark-mode');
const  container = document.querySelector('.container')

const isFullDarkMode = JSON.parse(localStorage.getItem('fullDarkModeCheckBox'))
const isconatinedDarkMode = JSON.parse(localStorage.getItem('containerDarkModeCheckBox'))

if(isFullDarkMode){
    fullDarkModeCheckBox.checked = true
}
if(isconatinedDarkMode){
    containerDarkModeCheckBox.checked = true
}

changeFullDarkMode ()
changeContainedDarkMode();

fullDarkModeCheckBox.addEventListener('change', () => {
    changeFullDarkMode ()
    changeContainedDarkMode();
});

function changeTheme (checkbox, element, LocalStorageKey) {

    if (checkbox.checked){
        element.classList.add('dark')
        localStorage.setItem(LocalStorageKey, true)
    }else{
        element.classList.remove('dark')
        localStorage.setItem(LocalStorageKey, false)
    }
};

function changeFullDarkMode (){
    changeTheme(fullDarkModeCheckBox, document.body, 'fullDarkModeCheckBox')
    // if(fullDarkModeCheckBox.checked === true){
    //     document.body.classList.add('dark')
    //     localStorage.setItem('fullDarkModeCheckBox', true)
    // }else{
    //     document.body.classList.remove('dark')
    //     localStorage.setItem('fullDarkModeCheckBox', false)
    // }
    containerDarkModeCheckBox.checked = fullDarkModeCheckBox.checked
};

function changeContainedDarkMode (){
    // if(containerDarkModeCheckBox.checked){
    //     container.classList.add('dark')
    //     localStorage.setItem('containerDarkModeCheckBox', true)
    //    }else{
    //     container.classList.remove('dark')
    //     localStorage.setItem('containerDarkModeCheckBox', false)
    //    }

    changeTheme(containerDarkModeCheckBox, container, 'containerDarkModeCheckBox')
};

containerDarkModeCheckBox.addEventListener('change', changeContainedDarkMode);
