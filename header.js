const headerNav = `
    <header>
        <h1>SLAP</h1>
        <p>Your gateway to trusted law firms</p>
    </header>
    <nav>
        <a href="index.html">Home</a>
        <a href="testimonials.html">Testimonials</a>
        <div class="dropdown">
            <a href="services.html">How It Works</a>
            <div class="dropdown-content">
                <a href="ai.html">AI Evaluation Tool</a>
                <a href="insurance.html">Insurance</a>
                <a href="submission.html">Submit a Case</a>
            </div>
        </div>
        <div class="dropdown">
            <a href="partnerships.html">Partnerships</a>
                <div class="dropdown-content">
                    <a href="for_lawyers.html">For Lawyers</a>
                </div>
            </div>
        <a href="plans.html">Plans</a>
        <div class="dropdown">
            <a href="about.html">About Us</a>
            <div class="dropdown-content">
                <a href="disclaimers.html">Disclaimers</a>
            </div>
        </div>
    </div>
    </nav>

    <style>
    nav {
        display: flex;
        justify-content: center;
        background: #444;
        padding: 0.5rem 0;
        position: relative;
    }

    nav a {
        color: #fff;
        margin: 0 1rem;
        text-decoration: none;
        font-weight: bold;
        font-family: 'Verdana', sans-serif;
        position: relative;
    }

    nav a:hover {
        color: #f4a261;
    }

    /* Dropdown container */
    .dropdown {
        position: relative;
        display: inline-block;
    }

    /* Dropdown menu */
    .dropdown-content {
        display: none; /* Hidden by default */
        position: absolute;
        background-color: #fff;
        color: #333;
        border: 1px solid #ddd;
        z-index: 1000;
        min-width: 200px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .dropdown-content a {
        display: block;
        padding: 0.5rem 1rem;
        color: #333;
        text-decoration: none;
        font-weight: normal;
    }

    .dropdown-content a:hover {
        background-color: #f4f4f4;
        color: #444;
    }

    /* Show dropdown on hover */
    .dropdown:hover .dropdown-content {
        display: block;
    }
</style>
`;

document.getElementById("header-container").innerHTML = headerNav;