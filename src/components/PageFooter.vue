<script>
import { store } from '../store.js'

export default {
    name: 'PageFooter',
    props: {
        navbarLink: Object
    },
    data() {
        return {
            store,

        }
    },

}
</script>

<template>
    <div class="container-fluid p-5">
        <div class="d-flex justify-content-between">
            <!-- contacts  -->
            <div id="contacts" class="ms-contacts pe-3">
                <div class="ms-logo-container mb-5">
                    <img class="img-fluid" src="../assets/img/logo-footer-football.png" alt="">
                </div>

                <!-- place  -->
                <div class="d-flex gap-3 mb-4">
                    <i class="fa-solid fa-location-dot"></i>
                    <div>{{ store.pageInfo.place }}</div>
                </div>

                <!-- tel  -->
                <div class="d-flex gap-3 mb-4">
                    <i class="fa-solid fa-phone-volume"></i>
                    <div>{{ store.pageInfo.tel }}</div>
                </div>

                <!-- mail  -->
                <div class="d-flex gap-3">
                    <i class="fa-solid fa-envelope"></i>
                    <div>{{ store.pageInfo.mail }}</div>
                </div>

                <!-- socials  -->
                <div class="d-flex align-items-center gap-3 mt-3">
                    <div class="d-flex align-items-center border px-3 py-1">
                        <svg height="20px" width="20px" viewBox="-2.11 177 324.22 562">
                            <path transform="scale(1,-1) translate(0,-650)" fill="transparent" stroke="#fff"
                                stroke-width="50"
                                d="M279.14 160h-74.6895v-224h-100.17v224h-81.3906v92.6602h81.3906v70.6201c0 80.3398 47.8594 124.72 121.08 124.72c35.0693 0 71.75 -6.25977 71.75 -6.25977v-78.8906h-40.4199c-39.8203 0 -52.2402 -24.71 -52.2402 -50.0596v-60.1299h88.9102z">
                            </path>
                        </svg>
                    </div>
                    <div class="d-flex align-items-center border px-3 py-1">
                        <svg height="20px" width="20px" viewBox="-0.07 233.83 448.25 448.15">
                            <path transform="scale(1,-1) translate(0,-650)" fill="#fff" stroke="" stroke-width="20"
                                d="M224.1 307c63.6006 0 114.9 -51.2998 114.9 -114.9c0 -63.5996 -51.2998 -114.899 -114.9 -114.899c-63.5996 0 -114.899 51.2998 -114.899 114.899c0 63.6006 51.2998 114.9 114.899 114.9zM224.1 117.4c41.1006 0 74.7002 33.5 74.7002 74.6992     c0 41.2002 -33.5 74.7002 -74.7002 74.7002c-41.1992 0 -74.6992 -33.5 -74.6992 -74.7002c0 -41.1992 33.5996 -74.6992 74.6992 -74.6992zM370.5 311.7c0 -14.9004 -12 -26.7998 -26.7998 -26.7998c-14.9004 0 -26.7998 12 -26.7998 26.7998s12 26.7998 26.7998 26.7998     s26.7998 -12 26.7998 -26.7998zM446.6 284.5c2.10059 -37 2.10059 -147.8 0 -184.8c-1.7998 -35.9004 -10 -67.7002 -36.1992 -93.9004c-26.2002 -26.2998 -58 -34.5 -93.9004 -36.2002c-37 -2.09961 -147.9 -2.09961 -184.9 0     c-35.8994 1.80078 -67.5996 10 -93.8994 36.2002s-34.5 58 -36.2002 93.9004c-2.09961 37 -2.09961 147.899 0 184.899c1.7998 35.9004 9.90039 67.7002 36.2002 93.9004s58.0996 34.4004 93.8994 36.0996c37 2.10059 147.9 2.10059 184.9 0     c35.9004 -1.7998 67.7002 -10 93.9004 -36.1992c26.2998 -26.2002 34.5 -58 36.1992 -93.9004zM398.8 60c11.7002 29.4004 9 99.5 9 132.1c0 32.6006 2.7002 102.601 -9 132.101c-7.89941 19.7002 -23 34.7998 -42.5996 42.5996c-29.4004 11.6006 -99.5 9 -132.101 9     c-32.5996 0 -102.6 2.7002 -132.1 -9c-19.7002 -7.89941 -34.7998 -23 -42.5996 -42.5996c-11.6006 -29.4004 -9 -99.5 -9 -132.101c0 -32.5996 -2.7002 -102.6 9 -132.1c7.89941 -19.7002 23 -34.7998 42.5996 -42.5996c29.4004 -11.6006 99.5 -9 132.1 -9     c32.6006 0 102.601 -2.7002 132.101 9c19.7002 7.89941 34.7998 23 42.5996 42.5996z">
                            </path>
                        </svg>
                    </div>
                    <div class="d-flex align-items-center border px-3 py-1">
                        <svg height="20px" width="20px" viewBox="-25 225.08 562 465.84">
                            <path transform="scale(1,-1) translate(0,-650)" fill="transparent" stroke="#fff"
                                stroke-width="50"
                                d="M459.37 296.284c0.325195 -4.54785 0.325195 -9.09766 0.325195 -13.6455c0 -138.72 -105.583 -298.558 -298.559 -298.558c-59.4521 0 -114.68 17.2188 -161.137 47.1055c8.44727 -0.973633 16.5684 -1.29883 25.3398 -1.29883     c49.0547 0 94.2129 16.5684 130.274 44.832c-46.1318 0.975586 -84.792 31.1885 -98.1123 72.7725c6.49805 -0.974609 12.9951 -1.62402 19.8184 -1.62402c9.4209 0 18.8428 1.2998 27.6133 3.57324c-48.0811 9.74707 -84.1426 51.9795 -84.1426 102.984v1.29883     c13.9688 -7.79688 30.2139 -12.6699 47.4307 -13.3184c-28.2637 18.8428 -46.7803 51.0049 -46.7803 87.3906c0 19.4922 5.19629 37.3604 14.2939 52.9541c51.6543 -63.6748 129.3 -105.258 216.364 -109.807c-1.62402 7.79688 -2.59863 15.918 -2.59863 24.04     c0 57.8271 46.7822 104.934 104.934 104.934c30.2139 0 57.502 -12.6699 76.6709 -33.1367c23.7148 4.54785 46.4551 13.3193 66.5986 25.3398c-7.79785 -24.3662 -24.3662 -44.833 -46.1318 -57.8271c21.1172 2.27344 41.584 8.12207 60.4258 16.2432     c-14.292 -20.791 -32.1611 -39.3086 -52.6279 -54.2529z">
                            </path>
                        </svg>
                    </div>
                </div>

            </div>

            <!-- newsletter -->
            <div class="col mt-3 px-4">
                <h4>Join Our Newsletter</h4>
                <p class="mt-3">Subscribe to be informed about important development in our club and football world.</p>

                <div class="d-flex flex-column gap-1 mt-5">
                    <input class="rounded-pill text-secondary py-3 px-4" type="email" name="email"
                        placeholder="Your Email Address">
                    <button class="btn btn-light rounded-pill p-3">Subscribe &rarr;</button>
                </div>
            </div>

            <!-- links  -->
            <div class="d-flex justify-content-between gap-5 px-3 mt-3">
                <div>
                    <h4>Education</h4>
                    <ul class="ps-3 text-uppercase">
                        <template v-for="(singleLink, index) in navbarLink">
                            <li v-if="navbarLink[index].category == 'education'">
                                <a role="button">
                                    {{ singleLink.link }}
                                </a>
                            </li>
                        </template>
                    </ul>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <ul class="ps-3 text-uppercase">
                        <template v-for="(singleLink, index) in navbarLink">
                            <li v-if="navbarLink[index].category == 'quick links'">
                                <a role="button">
                                    {{ singleLink.link }}
                                </a>
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
        </div>
        <small class="d-block text-center mt-5">&#169; 2022 Football Club - All Rights Reserved.</small>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.container-fluid {
    min-height: 28.125rem;
    background-color: #000;
    color: #fff;

    .ms-contacts {
        font-size: 14px;

        i {
            font-size: 20px;
        }
    }

    .ms-logo-container {
        width: 60px;
    }

    li {
        list-style-type: '- ';
        font-size: 14px;

    }

    input {
        &::placeholder {
            color: #c3c2c2;
        }
    }
}
</style>