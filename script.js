/* eslint-disable no-unused-vars */
let isShowed = false;

const sidebarHamburgerMenu = document.querySelector('.sidebar-hamburger-menu');
const mainSite = document.querySelector('.main-site');
const hamburgerMenu = document.querySelector('.hamburger-menu-nav').addEventListener('click', () => {
    if (!isShowed) {
        isShowed = true;
        sidebarHamburgerMenu.style.display = 'flex';
        mainSite.style.opacity = "0.5";
    } else {
        isShowed = false;
        sidebarHamburgerMenu.style.display = 'none';
        mainSite.style.opacity = "1";
    }
});

const searchInput = document.querySelector('.searchInput');
const clearInput = document.querySelector('.clear-input');

searchInput.addEventListener('input', (e) => {
    if(e.target.value.length >= 1) {
        clearInput.style.display = "inline";
    }
    else {
        clearInput.style.display = "none";
    }
})
searchInput.addEventListener('click', () => {

})

const searchBar = document.querySelector('.search-bar');

searchBar.addEventListener('mouseover', () => {
    searchBar.style.backgroundColor = "#233237";
})

searchBar.addEventListener('mouseout', () => {
    searchBar.style.backgroundColor = "#1b282d";
})

let isChecked = false;

const stars = document.querySelectorAll('.starSVG').forEach(svg =>
    svg.closest('.star').addEventListener('click', () => {
        const starPath = svg.querySelector('path');
        if (!isChecked) {
            isChecked = true;
            starPath.setAttribute('d', 'M19.943 7.659a1.142 1.142 0 0 0-.871-.771l-5.4-1.046L11 1.024a1.191 1.191 0 0 0-2 0L6.333 5.842.928 6.888a1.145 1.145 0 0 0-.619 1.9l3.757 4.024-.674 5.468a1.144 1.144 0 0 0 1.62 1.178L10 17.127l4.988 2.331a1.145 1.145 0 0 0 1.62-1.177l-.674-5.464 3.757-4.024a1.14 1.14 0 0 0 .252-1.134Z');
        } else {
            isChecked = false;
            starPath.setAttribute('d', 'M15.473 19.566c-.168 0-.333-.036-.485-.107L10 17.127l-4.988 2.332a1.145 1.145 0 0 1-1.62-1.179l.674-5.463L.309 8.793a1.145 1.145 0 0 1 .619-1.9l5.405-1.051L9 1.024a1.192 1.192 0 0 1 2 0l2.665 4.818 5.4 1.046a1.145 1.145 0 0 1 .619 1.9l-3.757 4.024.674 5.464a1.143 1.143 0 0 1-1.135 1.285l.007.005ZM10 15.748l5.345 2.5-.724-5.855 4.026-4.313-5.791-1.122L10 1.8 7.144 6.958 1.353 8.08l4.026 4.311-.724 5.855L10 15.748Z');
        }
    })
);

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked'); //dodaje style z select-clicked do select
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});

let isExpanded = true; 

const lists = document.querySelectorAll('.sidebar-list').forEach(list => {
    list.addEventListener('click', (event) => {
        if (!event.target.closest('.community')) {
            let nextChild = list.firstElementChild;
            let arrow = nextChild.firstElementChild;
            let contents = list.querySelectorAll(".community");
            contents.forEach(content => {
                if (content.style.display === "none") {
                    content.style.display = "flex";
                    content.style.animation = "opacity2 0.3s";
                    arrow.classList.remove("active");
                } else {
                    arrow.classList.add("active");
                    content.style.animation = "opacity1 0.3s";
                    setTimeout(() => {
                        content.style.display = "none";
                    }, 290);
                }
            });
        }
    });
});

document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', (event) => {
        event.stopPropagation(); // zapobiega propagacji zdarzenia do rodzica (.community)
    });
});

// ! POSTY -----------------------------------------------

const communityNames = document.querySelectorAll('.community-name').forEach(name => {
    let nextChild = name.firstElementChild;
    name.addEventListener('mouseenter', () => {
        setTimeout(() => {
            nextChild.style.display = "flex";
        }, 500);
    });
    name.addEventListener('mouseleave', () => {
        setTimeout(() => {
            nextChild.style.display = "none";
        }, 500);
    });
});

let isUpClicked = [];
let isDownClicked = [];

const thumbsUp = document.querySelectorAll('.thumbUp').forEach((thumb, index) => {
    isUpClicked[index] = false;
    isDownClicked[index] = false;

    thumb.addEventListener('click', () => {
        const thumbPath = thumb.querySelector('path');
        const parent = thumb.parentElement;
        const grandparent = parent.parentElement;
        const sibling = thumb.nextElementSibling;
        let numberOfLikes = parseInt(sibling.innerText);

        if (!isUpClicked[index]) {
            numberOfLikes++;
            sibling.innerText = numberOfLikes;
            grandparent.style.backgroundColor = "#d53618";
            thumbPath.setAttribute('d', 'M18.706 8.953 10.834.372A1.123 1.123 0 0 0 10 0a1.128 1.128 0 0 0-.833.368L1.29 8.957a1.249 1.249 0 0 0-.171 1.343 1.114 1.114 0 0 0 1.007.7H6v6.877A1.125 1.125 0 0 0 7.123 19h5.754A1.125 1.125 0 0 0 14 17.877V11h3.877a1.114 1.114 0 0 0 1.005-.7 1.251 1.251 0 0 0-.176-1.347Z');
            isUpClicked[index] = true;
            thumb.removeEventListener('mouseover', mouseOver);
            thumb.addEventListener('mouseout', mouseOut);
            if (isDownClicked[index]) {
                const downSibling = thumb.parentElement.nextElementSibling.firstElementChild;
                const downGrandparent = thumb.parentElement.parentElement;
                downGrandparent.style.backgroundColor = "#d53618";
                downSibling.querySelector('path').setAttribute('d', 'M10 20a1.122 1.122 0 0 1-.834-.372l-7.872-8.581A1.251 1.251 0 0 1 1.118 9.7 1.114 1.114 0 0 1 2.123 9H6V2.123A1.125 1.125 0 0 1 7.123 1h5.754A1.125 1.125 0 0 1 14 2.123V9h3.874a1.114 1.114 0 0 1 1.007.7 1.25 1.25 0 0 1-.171 1.345l-7.876 8.589A1.128 1.128 0 0 1 10 20Zm-7.684-9.75L10 18.69l7.741-8.44H12.75v-8h-5.5v8H2.316Zm15.469-.05c-.01 0-.014.007-.012.013l.012-.013Z');
                isDownClicked[index] = false;
                numberOfLikes++;
                sibling.innerText = numberOfLikes;
                thumb.addEventListener('mouseover', mouseOver);
                thumb.addEventListener('mouseout', mouseOut);
            }
        } else {
            numberOfLikes--;
            sibling.innerText = numberOfLikes;
            grandparent.style.backgroundColor = "#1b282d";
            thumbPath.setAttribute('d', 'M12.877 19H7.123A1.125 1.125 0 0 1 6 17.877V11H2.126a1.114 1.114 0 0 1-1.007-.7 1.249 1.249 0 0 1 .171-1.343L9.166.368a1.128 1.128 0 0 1 1.668.004l7.872 8.581a1.25 1.25 0 0 1 .176 1.348 1.113 1.113 0 0 1-1.005.7H14v6.877A1.125 1.125 0 0 1 12.877 19ZM7.25 17.75h5.5v-8h4.934L10 1.31 2.258 9.75H7.25v8ZM2.227 9.784l-.012.016c.01-.006.014-.01.012-.016Z');
            isUpClicked[index] = false;
            thumb.addEventListener('mouseover', mouseOver);
            thumb.addEventListener('mouseout', mouseOut);
        }
    });

    function mouseOver() {
        thumb.style.color = "#D93A00";
    }

    function mouseOut() {
        thumb.style.color = "#F2F4F5";
    }

    thumb.addEventListener('mouseover', mouseOver);
    thumb.addEventListener('mouseout', mouseOut);
});

const thumbsDown = document.querySelectorAll('.thumbDown').forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        const thumbPath = thumb.querySelector('path');
        const parent = thumb.parentElement;
        const grandparent = parent.parentElement;
        const sibling = thumb.parentElement.previousElementSibling.lastElementChild;
        let numberOfLikes = parseInt(sibling.innerText);

        if (!isDownClicked[index]) {
            numberOfLikes--;
            sibling.innerText = numberOfLikes;
            grandparent.style.backgroundColor = "#6b5efa";
            thumbPath.setAttribute('d', 'M18.88 9.7a1.114 1.114 0 0 0-1.006-.7H14V2.123A1.125 1.125 0 0 0 12.877 1H7.123A1.125 1.125 0 0 0 6 2.123V9H2.123a1.114 1.114 0 0 0-1.005.7 1.25 1.25 0 0 0 .176 1.348l7.872 8.581a1.124 1.124 0 0 0 1.667.003l7.876-8.589A1.248 1.248 0 0 0 18.88 9.7Z');
            isDownClicked[index] = true;
            thumb.removeEventListener('mouseover', mouseOver);
            thumb.addEventListener('mouseout', mouseOut);
            if (isUpClicked[index]) {
                const upSibling = thumb.parentElement.previousElementSibling.firstElementChild;
                const upGrandparent = thumb.parentElement.parentElement;
                upGrandparent.style.backgroundColor = "#6b5efa";
                upSibling.querySelector('path').setAttribute('d', 'M12.877 19H7.123A1.125 1.125 0 0 1 6 17.877V11H2.126a1.114 1.114 0 0 1-1.007-.7 1.249 1.249 0 0 1 .171-1.343L9.166.368a1.128 1.128 0 0 1 1.668.004l7.872 8.581a1.25 1.25 0 0 1 .176 1.348 1.113 1.113 0 0 1-1.005.7H14v6.877A1.125 1.125 0 0 1 12.877 19ZM7.25 17.75h5.5v-8h4.934L10 1.31 2.258 9.75H7.25v8ZM2.227 9.784l-.012.016c.01-.006.014-.01.012-.016Z');
                isUpClicked[index] = false;
                numberOfLikes--;
                sibling.innerText = numberOfLikes;
                thumb.addEventListener('mouseover', mouseOver);
                thumb.addEventListener('mouseout', mouseOut);
            }
        } else {
            numberOfLikes++;
            sibling.innerText = numberOfLikes;
            grandparent.style.backgroundColor = "#1b282d";
            thumbPath.setAttribute('d', 'M10 20a1.122 1.122 0 0 1-.834-.372l-7.872-8.581A1.251 1.251 0 0 1 1.118 9.7 1.114 1.114 0 0 1 2.123 9H6V2.123A1.125 1.125 0 0 1 7.123 1h5.754A1.125 1.125 0 0 1 14 2.123V9h3.874a1.114 1.114 0 0 1 1.007.7 1.25 1.25 0 0 1-.171 1.345l-7.876 8.589A1.128 1.128 0 0 1 10 20Zm-7.684-9.75L10 18.69l7.741-8.44H12.75v-8h-5.5v8H2.316Zm15.469-.05c-.01 0-.014.007-.012.013l.012-.013Z');
            isDownClicked[index] = false;
            thumb.addEventListener('mouseover', mouseOver);
            thumb.addEventListener('mouseout', mouseOut);
        }
    });

    function mouseOver() {
        thumb.style.color = "#6A5CFF";
    }

    function mouseOut() {
        thumb.style.color = "#F2F4F5";
    }

    thumb.addEventListener('mouseover', mouseOver);
    thumb.addEventListener('mouseout', mouseOut);
});

let isClicked = false;
let isSaveClicked = false;

const threeDots = document.querySelectorAll('.three-dots').forEach(threedot => {
    const popup = threedot.lastElementChild;
    const video = threedot.parentElement.parentElement.querySelector('.bg-black');
    const save = threedot.lastElementChild.firstElementChild;

    threedot.addEventListener('click', () => {
        if (!isClicked) {
            popup.style.display = "flex";
            isClicked = true;
            if (!(video === null)) {
                video.style.pointerEvents = "none";
            }
        } else {
            popup.style.display = "none";
            isClicked = false;
            if(!(video === null)) {
                video.style.pointerEvents = "auto";
            }
        }
    });

    save.addEventListener('click', () => {
        if (!isSaveClicked) {
            save.firstElementChild.firstElementChild.firstElementChild.setAttribute('d', 'M15.372 1H4.628A1.629 1.629 0 0 0 3 2.628v16.256a1.113 1.113 0 0 0 1.709.941L10 16.479l5.282 3.34A1.12 1.12 0 0 0 17 18.873V2.628A1.63 1.63 0 0 0 15.372 1Z');
            save.lastElementChild.innerText = "Remove from saved";
            isSaveClicked = true;
            const newPopup = new Popup("Post saved", "default");
            newPopup.createElement();
        } else {
            save.firstElementChild.firstElementChild.firstElementChild.setAttribute('d', 'M4.114 20A1.117 1.117 0 0 1 3 18.884V2.628A1.629 1.629 0 0 1 4.628 1h10.744A1.63 1.63 0 0 1 17 2.628v16.245a1.12 1.12 0 0 1-1.718.946L10 16.479l-5.291 3.346a1.11 1.11 0 0 1-.595.175Zm.514-17.75a.378.378 0 0 0-.378.378v16.009L10 15l5.75 3.636V2.628a.378.378 0 0 0-.378-.378H4.628Z');
            save.lastElementChild.innerText = "Save";
            isSaveClicked = false;
            const newPopup = new Popup("Removed from saved.", "warning");
            newPopup.createElement();
        }
    });
});

class Popup {
    text = "";
    type = "";

    constructor(text = "Done.", type = "default") {
        this.text = text;
        this.type = type;
    }

    createElement() {
        if (this.type === "default") {
            this.giveNewElementType("notification-default");
        } else if (this.type === "warning") {
            this.giveNewElementType("notification-warning");
        } else {
            this.giveNewElementType("notification-error");
        }
    }

    giveNewElementType(className) {
        const notificationsDiv = document.querySelector('.notifications');

        const newNotification = document.createElement('div');
        newNotification.classList.add(className);
        let newContent = "";

        if (this.text.charAt(this.text.length - 1) === ".") {
            newContent = document.createTextNode(this.text);
        } else {
            if (className === "default") {
                newContent = document.createTextNode(this.text + ".");
            } else {
                newContent = document.createTextNode(this.text + "!");
            }
        }
        newNotification.appendChild(newContent);

        const newX = newNotification.appendChild(document.createElement('div'));
        newX.classList.add('basic-flexbox-notification');

        let svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgElement.setAttribute('fill', 'currentColor');
        svgElement.setAttribute('height', '20px');
        svgElement.setAttribute('viewBox', '0 0 20 20');
        svgElement.setAttribute('width', '20px');
        svgElement.style.zIndex = "2000";
        let svgPath = svgElement.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'path'));
        svgPath.setAttribute('d', 'm18.442 2.442-.884-.884L10 9.116 2.442 1.558l-.884.884L9.116 10l-7.558 7.558.884.884L10 10.884l7.558 7.558.884-.884L10.884 10l7.558-7.558Z');

        newX.appendChild(svgElement);
        newX.addEventListener('click', () => {
            newNotification.remove();  
        });

        const existingNotifications = document.querySelectorAll('.notifications > *');

        existingNotifications.forEach(notification => {
        const bottom = parseInt(notification.style.bottom || 0, 10);
            notification.style.bottom = (bottom + 120) + 'px'; 
        });

        notificationsDiv.insertBefore(newNotification, notificationsDiv.firstElementChild);

        setTimeout(() => {
            newNotification.remove();
        }, 3000)
    }
}