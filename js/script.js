class User {
  constructor(name, email, phone, website, address, company) {
    this.name = name
    this.email = email
    this.phone = phone
    this.website = website
    this.address = address
    this.company = company
  }
}

async function getData() {
  const req = await fetch('https://jsonplaceholder.typicode.com/users/8')
  const res = await req.json()
  return res
}

async function createUser(){
  const dataUser = await getData()
  const user = new User(
    dataUser.name,
    dataUser.email,
    dataUser.phone,
    dataUser.website,
    dataUser.address,
    dataUser.company
  )
  const template = `<article>
      <h2>${user.name}</h2>
      <div id="contact">
        <a href="mailto:${user.email}" id="email">${user.email}</a>
        <a href="tel:${user.phone}" id="phone">${user.phone}</a>
        <a href="${user.website}" id="website">${user.website}</a>
      </div>
      <div>
        <div id="adress">
          <h3>Adress</h3>
          <p>${user.address.street}</p>
          <p>${user.address.city}</p>
          <p>${user.address.zipcode}</p>
        </div>
        <div id="company">
          <h3>Company infos</h3>
          <p>${user.company.name}</p>
          <p>${user.company.catchPhrase}</p>
          <p>${user.company.bs}</p>
        </div>
      </div>
    </article>
  `

  document.querySelector('h1').insertAdjacentHTML('afterend', template)
}

try {
  createUser()
} catch (e) {
  console.error(e);
}