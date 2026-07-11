import React from 'react'

const NavBar = () => {
  return (
    <div>
<nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark"> 
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">register</a>
        <a class="nav-link" href="/search">search </a>
        <a class="nav-link" href="/delete">delete</a>
        <a class="nav-link" href="/view">view</a>
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>
</nav>


    </div>
  )
}

export default NavBar