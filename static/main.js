const host = 'https://nodejs-production-5fa54.up.railway.app';

async function setProjects(){
    const projects = await (await fetch(host + '/projects')).json();
    const projectsContainer = document.getElementById('projects_holder');
    for(const project of projects){
        const col = document.createElement('div');
        col.className = 'col-lg-6';
        projectsContainer.append(col);
        const card = document.createElement('div');
        card.className ='card mb-4 shadow';
        col.append(card);

        const img = document.createElement('img');
        img.src = project.image;
        img.className = 'card-img-top';
        card.append(img);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body p-4';
        card.append(cardBody);

        const title = document.createElement('h5');
        title.innerHTML = project.name;
        cardBody.append(title);

        const desc = document.createElement('span');
        desc.className = 'card-text';
        desc.innerHTML = project.description;
        cardBody.append(desc);
    }
}

setProjects();
