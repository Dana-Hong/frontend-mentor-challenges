const unreadNotificationsElement = document.querySelector(".unread-notifications");
let unreadNotifications = 7;
const notificationsElements = Array.from(document.querySelector(".notifications").children);

unreadNotificationsElement.textContent = unreadNotifications;

notificationsElements.forEach((notification) =>
      notification.addEventListener("click", () => {
            if (
                  Array.from(notification.firstElementChild.lastElementChild.classList).includes(
                        "notification-details"
                  )
            ) {
                  notification.firstElementChild.lastElementChild.classList.remove("hidden");
            }
            if (Array.from(notification.classList).includes("unread")) {
                  notification.classList.remove("unread");
                  unreadNotifications -= 1;
                  unreadNotificationsElement.textContent = unreadNotifications;
            }
      })
);
