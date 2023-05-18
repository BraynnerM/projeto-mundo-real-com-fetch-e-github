const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
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
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                               <h2>Repositórios</h2>
                                               <ul>${repositoriesItens}</ul>
                                           </div>`
        }
console.log(user.events)
        let eventsItens = ''
        user.events.forEach(event => eventsItens += `<li><a>${event.repo.name} -${event.type}`)
        
        if(user.events.length > 0){
            this.userProfile.innerHTML += `<div class="events section">
                                               <h2>Eventos</h2>                                               
                                               <ul>${eventsItens}</ul>
                                           </div>`
        }
    },

    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }