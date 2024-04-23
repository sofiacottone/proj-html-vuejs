<script>
export default {
    name: 'TablesSection',
}
</script>

<template>
    <div class="container-fluid py-4">
        <!-- tables  -->
        <div class="d-flex justify-content-center gap-5">
            <!-- league table  -->
            <table class="caption-top border col-5">
                <caption class="text-center h4 fw-bold">League Table</caption>
                <thead class="text-uppercase">
                    <th class="p-1 ps-2" colspan="2">team</th>
                    <th class="px-2 text-center">w</th>
                    <th class="px-2 text-center">d</th>
                    <th class="px-2 text-center">l</th>
                    <th class="ps-1 pe-0 text-center">pts</th>
                </thead>
                <tbody>
                    <tr class="text-center">
                        <th class="py-2 ps-2 text-start text-start" scope="row">1</th>
                        <td class="d-flex align-items-center">
                            <div class="ms-club-logo me-2 my-1">
                                <img class="img-fluid" src="../assets/img/club-1.png" alt="">
                            </div>
                            <span>
                                Istanbul Sports
                            </span>
                        </td>
                        <td>18</td>
                        <td>2</td>
                        <td>0</td>
                        <td>42</td>
                    </tr>
                    <tr class="text-center">
                        <th class="py-2 ps-2 text-start" scope="row">2</th>
                        <td class="d-flex align-items-center">
                            <div class="ms-club-logo me-2 my-1">
                                <img class="img-fluid" src="../assets/img/club-2.png" alt="">
                            </div>
                            <span>
                                United Fs Club
                            </span>
                        </td>
                        <td>14</td>
                        <td>2</td>
                        <td>1</td>
                        <td>35</td>
                    </tr>
                    <tr class="text-center">
                        <th class="py-2 ps-2 text-start" scope="row">3</th>
                        <td class="d-flex align-items-center">
                            <div class="ms-club-logo me-2 my-1">
                                <img class="img-fluid" src="../assets/img/club-3.png" alt="">
                            </div>
                            <span>
                                Schalke Club
                            </span>
                        </td>
                        <td>13</td>
                        <td>3</td>
                        <td>0</td>
                        <td>32</td>
                    </tr>
                    <tr class="text-center">
                        <th class="py-2 ps-2 text-start" scope="row">4</th>
                        <td class="d-flex align-items-center">
                            <div class="ms-club-logo me-2 my-1">
                                <img class="img-fluid" src="../assets/img/club-4.png" alt="">
                            </div>
                            <span>
                                Inter Club
                            </span>
                        </td>
                        <td>13</td>
                        <td>2</td>
                        <td>1</td>
                        <td>31</td>
                    </tr>
                    <tr class="text-center">
                        <th class="py-2 ps-2 text-start" scope="row">5</th>
                        <td class="d-flex align-items-center">
                            <div class="ms-club-logo me-2 my-1">
                                <img class="img-fluid" src="../assets/img/league-club-5.png" alt="">
                            </div>
                            <span>
                                Madrid Club
                            </span>
                        </td>
                        <td>12</td>
                        <td>1</td>
                        <td>2</td>
                        <td>30</td>
                    </tr>
                    <tr class="text-center">
                        <th class="py-2 ps-2 text-start" scope="row">6</th>
                        <td class="d-flex align-items-center">
                            <div class="ms-club-logo me-2 my-1">
                                <img class="img-fluid" src="../assets/img/league-club-6.png" alt="">
                            </div>
                            <span>
                                Schalke Club
                            </span>
                        </td>
                        <td>11</td>
                        <td>0</td>
                        <td>3</td>
                        <td>28</td>
                    </tr>
                    <tr class="text-center">
                        <th class="py-2 ps-2 text-start" scope="row">7</th>
                        <td class="d-flex align-items-center">
                            <div class="ms-club-logo me-2 my-1">
                                <img class="img-fluid" src="../assets/img/league-club-7.png" alt="">
                            </div>
                            <span>
                                Arsenal Club
                            </span>
                        </td>
                        <td>10</td>
                        <td>6</td>
                        <td>0</td>
                        <td>26</td>
                    </tr>
                    <tr class="text-center">
                        <th class="py-2 ps-2 text-start" scope="row">8</th>
                        <td class="d-flex align-items-center">
                            <div class="ms-club-logo me-2 my-1">
                                <img class="img-fluid" src="../assets/img/league-club-8.png" alt="">
                            </div>
                            <span>
                                Bayern Club
                            </span>
                        </td>
                        <td>10</td>
                        <td>2</td>
                        <td>2</td>
                        <td>24</td>
                    </tr>
                    <tr class="text-center">
                        <th class="py-2 ps-2 text-start" scope="row">9</th>
                        <td class="d-flex align-items-center">
                            <div class="ms-club-logo me-2 my-1">
                                <img class="img-fluid" src="../assets/img/league-club-9.png" alt="">
                            </div>
                            <span>
                                Atletico Club
                            </span>
                        </td>
                        <td>9</td>
                        <td>0</td>
                        <td>4</td>
                        <td>20</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr class="text-center fw-bold">
                        <td class="py-3" colspan="6">View Full League Table</td>
                    </tr>
                </tfoot>
            </table>
            <!-- fixtures and results  -->
            <table id="fixtures" class="caption-top border col-5">
                <caption class="text-center h4 fw-bold">Fixtures & Results</caption>
                <tbody>
                    <tr class="text-center">
                        <td class="d-flex align-items-center justify-content-end">
                            <div class="ms-club-logo me-2 my-1">
                                <img class="img-fluid" src="../assets/img/club-1.png" alt="">
                            </div>
                            <span>
                                Istanbul Sports
                            </span>
                        </td>
                        <td>VS</td>
                        <td class="d-flex align-items-center">
                            <span>
                                United Fs Club
                            </span>
                            <div class="ms-club-logo ms-2 my-1">
                                <img class="img-fluid" src="../assets/img/club-2.png" alt="">
                            </div>
                        </td>
                    </tr>
                    <tr class="text-center">
                        <td class="d-flex align-items-center justify-content-end">
                            <div class="ms-club-logo me-2 my-1">
                                <img class="img-fluid" src="../assets/img/club-3.png" alt="">
                            </div>
                            <span>
                                Schalke Club
                            </span>
                        </td>
                        <td>VS</td>
                        <td class="d-flex align-items-center">
                            <span>
                                Inter Club
                            </span>
                            <div class="ms-club-logo ms-2 my-1">
                                <img class="img-fluid" src="../assets/img/club-4.png" alt="">
                            </div>
                        </td>
                    </tr>
                    <tr class="text-center">
                        <td class="d-flex align-items-center justify-content-end">
                            <div class="ms-club-logo me-2 my-1">
                                <img class="img-fluid" src="../assets/img/league-club-5.png" alt="">
                            </div>
                            <span>
                                Madrid Club
                            </span>
                        </td>
                        <td>VS</td>
                        <td class="d-flex align-items-center">
                            <span>
                                Schalke Club
                            </span>
                            <div class="ms-club-logo ms-2 my-1">
                                <img class="img-fluid" src="../assets/img/league-club-6.png" alt="">
                            </div>
                        </td>
                    </tr>
                    <tr class="text-center">
                        <td class="d-flex align-items-center justify-content-end">
                            <div class="ms-club-logo me-2 my-1">
                                <img class="img-fluid" src="../assets/img/league-club-7.png" alt="">
                            </div>
                            <span>
                                Arsenal Club
                            </span>
                        </td>
                        <td>VS</td>
                        <td class="d-flex align-items-center">
                            <span>
                                Bayern Club
                            </span>
                            <div class="ms-club-logo ms-2 my-1">
                                <img class="img-fluid" src="../assets/img/league-club-8.png" alt="">
                            </div>
                        </td>
                    </tr>
                    <tr class="text-center">
                        <td class="d-flex align-items-center justify-content-end">
                            <div class="ms-club-logo me-2 my-1">
                                <img class="img-fluid" src="../assets/img/league-club-9.png" alt="">
                            </div>
                            <span>
                                Atletico Club
                            </span>
                        </td>
                        <td>VS</td>
                        <td class="d-flex align-items-center">
                            <span>
                                Istanbul Sports
                            </span>
                            <div class="ms-club-logo ms-2 my-1">
                                <img class="img-fluid" src="../assets/img/club-1.png" alt="">
                            </div>
                        </td>
                    </tr>
                    <tr class="text-center">
                        <td class="d-flex align-items-center justify-content-end">
                            <div class="ms-club-logo me-2 my-1">
                                <img class="img-fluid" src="../assets/img/club-2.png" alt="">
                            </div>
                            <span>
                                United Fs Club
                            </span>
                        </td>
                        <td>VS</td>
                        <td class="d-flex align-items-center">
                            <span>
                                Schalke Club
                            </span>
                            <div class="ms-club-logo ms-2 my-1">
                                <img class="img-fluid" src="../assets/img/club-3.png" alt="">
                            </div>
                        </td>
                    </tr>
                    <tr class="text-center">
                        <td class="d-flex align-items-center justify-content-end">
                            <div class="ms-club-logo me-2 my-1">
                                <img class="img-fluid" src="../assets/img/club-4.png" alt="">
                            </div>
                            <span>
                                Inter Club
                            </span>
                        </td>
                        <td>VS</td>
                        <td class="d-flex align-items-center">
                            <span>
                                Madrid Club
                            </span>
                            <div class="ms-club-logo ms-2 my-1">
                                <img class="img-fluid" src="../assets/img/league-club-5.png" alt="">
                            </div>
                        </td>
                    </tr>
                    <tr class="text-center">
                        <td class="d-flex align-items-center justify-content-end">
                            <div class="ms-club-logo me-2 my-1">
                                <img class="img-fluid" src="../assets/img/league-club-6.png" alt="">
                            </div>
                            <span>
                                Schalke Club
                            </span>
                        </td>
                        <td>VS</td>
                        <td class="d-flex align-items-center">
                            <span>
                                Arsenal Club
                            </span>
                            <div class="ms-club-logo ms-2 my-1">
                                <img class="img-fluid" src="../assets/img/league-club-7.png" alt="">
                            </div>
                        </td>
                    </tr>
                    <tr class="text-center">
                        <td class="d-flex align-items-center justify-content-end">
                            <div class="ms-club-logo me-2 my-1">
                                <img class="img-fluid" src="../assets/img/league-club-8.png" alt="">
                            </div>
                            <span>
                                Bayern Club
                            </span>
                        </td>
                        <td>VS</td>
                        <td class="d-flex align-items-center">
                            <span>
                                Atletico Club
                            </span>
                            <div class="ms-club-logo ms-2 my-1">
                                <img class="img-fluid" src="../assets/img/league-club-9.png" alt="">
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr class="text-center fw-bold">
                        <td class="py-3" colspan="6">View Full Fixtures</td>
                    </tr>
                </tfoot>
            </table>
        </div>
        <div id="reclame" class="text-center mt-3">
            <img class="img-fluid" src="../assets/img/reklam.jpg" alt="reclame">
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.container-fluid {
    min-height: 600px;

    table {
        max-width: 600px;
        border-collapse: collapse;
        border-style: hidden;

        thead,
        tfoot {
            background-color: #000;
            color: #fff;
        }

        tbody {
            background-color: $light-gray;
        }

        .ms-club-logo {
            width: 50px;
            height: 50px;
        }
    }

    #fixtures {
        tbody {
            tr:nth-child(even) {
                background-color: $dark-gray;
            }
        }
    }

    #reclame {
        max-height: 220px;
    }

}
</style>
