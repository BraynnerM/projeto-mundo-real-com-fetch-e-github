const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                             <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                             <div class="data">
                                 <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                 <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                                 <p>Seguidores: ${user.followers}</p>
                                 <p>Seguindo: ${user.following}</p>
                             </div>
                         </div>`
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a><ul><li class="info-comp"> 🍴 ${repo.forks} </li><li class="info-comp"> ⭐ ${repo.stargazers_count} </li><li class="info-comp"> 👀 ${repo.watchers} </li><li class="info-comp"> 📒 ${repo.language ?? "Não definida"} </li></ul></li>`)
        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                               <h2>Repositórios</h2>
                                               <ul>${repositoriesItens}</ul>
                                           </div>`
        }

        let eventsItens = ''

        let filteredEvents = user.events.filter(event => {
            return event.type === "CreateEvent" || event.type === "PushEvent";
        })
        filteredEvents.forEach(event => {
            if (event.payload.commits) {
                eventsItens += `<li>${event.repo.name} <span>  -${event.payload.commits[0].message}</span></li>`
            }
        })
        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events section">
                                               <h2>Eventos</h2>                                               
                                               <ul>${eventsItens}</ul>
                                           </div>`
        }
    },

    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }