import React from 'react'

const HeaderProduct = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg" style={{ backgroundColor:'lightgreen' }}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><strong>PRODUCT APP</strong></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/search">Search Product</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/view">View Product</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/add">Add Product</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default HeaderProduct