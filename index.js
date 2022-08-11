var menuIcon = document.querySelector('.menu')
var menuBox = document.querySelector('.mobilemenu')
var exitMenu = document.querySelector('.closeMenu')
var features = document.querySelector('.features')
var company = document.querySelector('.company')
var featureList= document.querySelector('.feature-list')
var companyList= document.querySelector('.company-list')
var arrowDown= document.querySelector('.arrowdown')
var arrowUp= document.querySelector('.arrowup')
var arrowDownCompany= document.querySelector('.arrowdownCom')
var arrowUpCompany= document.querySelector('.arrowupCom')
var featuresDesktop = document.querySelector('.featuresDesk')
var companyDesk = document.querySelector('.companyDesk')
var featureListDesktop= document.querySelector('.feature-listDesk')
var companyListDesktop= document.querySelector('.companylistDesk ')
var arrowDownDesktop= document.querySelector('.arrowdownDesk')
var arrowUpDesktop= document.querySelector('.arrowupDesk')
var arrowDownCompanyDesktop= document.querySelector('.arrowdownComDesk')
var arrowUpCompanyDesktop= document.querySelector('.arrowupComDesk')


console.log(arrowUpCompanyDesktop)

menuIcon.addEventListener('click', () => {
    menuBox.classList.remove('hidden')
    featureList.classList.add('hidden')
    companyList.classList.add('hidden')
    arrowDown.classList.remove('hidden')
    arrowUp.classList.add('hidden')
    arrowDownCompany.classList.remove('hidden')
    arrowUpCompany.classList.add('hidden')

})

exitMenu.addEventListener('click', () => {
    menuBox.classList.add('hidden')
})

features.addEventListener('click', () => {
    featureList.classList.toggle('hidden')
    arrowDown.classList.toggle('hidden')
    arrowUp.classList.toggle('hidden')

})

company.addEventListener('click', () => {
    companyList.classList.toggle('hidden')
    arrowDownCompany.classList.toggle('hidden')
    arrowUpCompany.classList.toggle('hidden')

})

featuresDesktop.addEventListener('click', () => {
    featureListDesktop.classList.toggle('hidden')
    arrowDownDesktop.classList.toggle('hidden')
    arrowUpDesktop.classList.toggle('hidden')

})

companyDesk.addEventListener('click', () => {
    companyListDesktop.classList.toggle('hidden')
    arrowDownCompanyDesktop.classList.toggle('hidden')
    arrowUpCompanyDesktop.classList.toggle('hidden')

})
