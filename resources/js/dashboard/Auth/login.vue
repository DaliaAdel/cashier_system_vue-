<style>
.card{
    background-color: rgba(255, 255, 255, 0.744);
    margin-top: 7.5rem;

}
h1
{
    font-size:  2.5rem;
}
label
{
    font-size:  1.5rem;
}
.card-link
{
    text-decoration: underline;
}
.submit-btn
{
    background-image: linear-gradient(0deg, rgba(2,0,36,1) 10%, rgba(158,8,97,1) 73%);
    color: white;
}
</style>

<template>
    <div class="text-center text-white my-5 text-uppercase">
        <h1> Cashier System</h1>
    </div>
  <div class="card">
  <div class="card-body p-5">
    <form action="" method="post">
        <h1 class="card-title mb-4 text-center">Login</h1>
        <h6 class="card-subtitle mb-4 text-muted text-center">Please Enter Your Credentials Belows To Continue </h6>
        <div class="card-text text-left">
            <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label ">Email</label>
            <input type="email" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Password</label>
            <input type="password" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="123">
            </div>
        </div>

        <div class="d-flex justify-content-between align-items-center">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="inlineFormCheck">
                <p class="form-check-label" for="inlineFormCheck">
                    Remember me
                </p>
            </div>
            <a href="/your-link-here" class="card-link ms-3 ">Forget Password</a>
        </div>

        <div class="text-center mt-5">
                <div class="btn btn-lg submit-btn "> Submit</div>
        </div>
    </form>
  </div>
</div>
</template>

