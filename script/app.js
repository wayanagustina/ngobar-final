




const sidebar = document.querySelector("#sidebar");
const buttonToggler = document.querySelector(".navigation__toggler");
const buttonCloser = document.querySelector(".navigation__closer");

const elementNavigationMenus = document.querySelector('.')

const elementProjectComplete = document.querySelector('#value-project-complete')
const elementYearOfExperience = document.querySelector('#value-year-of-experience')

/**
 * value only
 */

const containerValue = {
  projectComplete: 430,
  yearOfExperience: "30+",
};

/**
 * value menus
 */
const navigationMenus = [
  {
    title: "Work",
    link: "/#",
  },
  {
    title: "About",
    link: "/#",
  },
  {
    title: "Service",
    link: "/#",
  },
  {
    title: "Contact",
    link: "/#",
  },
];

const a = navigationMenu.map((navigation) => {
  returnnavigation;
})

/**
 * Untuk menampilkan sidebar ketika diklik
 * 
 * Cara baca: 
 * Button toggler ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * tambahkan class tambahan yaitu "show" dan buang class "hide"
 *  */
buttonToggler.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  sidebar.classList.remove("hide");
});

/**
 * Untuk menutup sidebar ketika diklik
 * 
 * Cara baca: 
 * Button closer ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * hapus class tambahan yaitu "hide" dan tambah class "show"
 *  */
buttonCloser.addEventListener("click", () => {
  sidebar.classList.remove("show");
  sidebar.classList.toggle("hide");
});

/**
 * inject value baru dari javascript ke element dengan
 * value complete
 */
elementProjectComplete.append(containerValue.projectComplete)
elementYearOfExperience.append(containerValue.yearOfExperience)