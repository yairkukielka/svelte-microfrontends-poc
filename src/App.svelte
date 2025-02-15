<script>
  import { onMount } from 'svelte';
  import { authService } from 'portal_auth/authService';
  import LoginForm from 'portal_auth/LoginForm';
  import HorizontalMenu from 'portal_menu/HorizontalMenu';

  const { isLoggedIn, currentUser, onLoggedIn } = authService();

  let loginApp;
  let menuApp;
  function mountLoginForm() {
    loginApp = new LoginForm({
      target: document.querySelector('.login-container'),
    });
  }

  onLoggedIn((userInfo) => {
    console.log('I am loggged in hook', userInfo);
    mountMenu();
  });

  function mountMenu() {
    //loginApp?.$destroy();

    menuApp = new HorizontalMenu({
      target: document.querySelector('.menu-container'),
    });
  }

  onMount(mountLoginForm);
</script>

<header class="header">
  <div class="menu-container"></div>
</header>
<main class="main">
  <div class="about">
    <h4>Accelerating Innovation in Assessment</h4>
    <p>
      For education organizations who want the freedom to control and own their
      assessment experience, from content to technology to delivery to
      reporting, the TAO assessment platform delivers maximum flexibility,
      interoperability, and security.
    </p>
    <p>
      isLoggedIn: {$isLoggedIn}
      Current User: {JSON.stringify($currentUser)}
    </p>
  </div>
  <div class="login-container"></div>
</main>

<style>
  .header {
    min-height: 40px;
    background: #fff;
  }

  .main {
    display: grid;
    grid-template-columns: 60% 40%;
    height: 100%;
    align-items: center;
    padding: 0 15px;
    background: #bb2225;
  }

  .about {
    color: #fff;
  }
</style>
