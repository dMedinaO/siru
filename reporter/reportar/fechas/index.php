<?php
	session_start();

  if (!$_SESSION){
	   echo '<script language = javascript>
	    alert("Usuario no autenticado")
	    self.location = "../../"
	    </script>';
  }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard SIRU</title>

    <!--STYLESHEET-->
    <!--=================================================-->

    <!--Open Sans Font [ OPTIONAL ]-->
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css'>

    <!--Bootstrap Stylesheet [ REQUIRED ]-->
    <link href="../../css/bootstrap.min.css" rel="stylesheet">

    <!--Nifty Stylesheet [ REQUIRED ]-->
    <link href="../../css/nifty.min.css" rel="stylesheet">


    <!--Nifty Premium Icon [ DEMONSTRATION ]-->
    <link href="../../css/demo/nifty-demo-icons.min.css" rel="stylesheet">

    <!--Demo [ DEMONSTRATION ]-->
    <link href="../../css/demo/nifty-demo.min.css" rel="stylesheet">

    <!--Animate.css [ OPTIONAL ]-->
    <link href="../../plugins/animate-css/animate.min.css" rel="stylesheet">

    <!--Bootstrap Timepicker [ OPTIONAL ]-->
    <link href="../../plugins/bootstrap-timepicker/bootstrap-timepicker.min.css" rel="stylesheet">
    <!--Bootstrap Datepicker [ OPTIONAL ]-->
    <link href="../../plugins/bootstrap-datepicker/bootstrap-datepicker.min.css" rel="stylesheet">

    <!--JAVASCRIPT-->
    <!--=================================================-->

    <!--Pace - Page Load Progress Par [OPTIONAL]-->
    <link href="../../plugins/pace/pace.min.css" rel="stylesheet">
    <script src="../../plugins/pace/pace.min.js"></script>

    <!--jQuery [ REQUIRED ]-->
    <script src="../../js/jquery.min.js"></script>

    <!--BootstrapJS [ RECOMMENDED ]-->
    <script src="../../js/bootstrap.min.js"></script>

    <!--NiftyJS [ RECOMMENDED ]-->
    <script src="../../js/nifty.min.js"></script>


    <!--=================================================-->

    <!--Demo script [ DEMONSTRATION ]-->
    <script src="../../js/demo/nifty-demo.min.js"></script>

    <!--Font Awesome [ OPTIONAL ]-->
    <link href="../../plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet">

    <!--Bootstrap Timepicker [ OPTIONAL ]-->
    <script src="../../plugins/bootstrap-timepicker/bootstrap-timepicker.min.js"></script>


    <!--Bootstrap Datepicker [ OPTIONAL ]-->
    <script src="../../plugins/bootstrap-datepicker/bootstrap-datepicker.min.js"></script>

    <!-- script para el procesamiento del datepicker-->
    <script src="../../js/adminJS/startDateTimePicker.js"></script>

    <!--=================================================

    REQUIRED
    You must include this in your project.


    RECOMMENDED
    This category must be included but you may modify which plugins or components which should be included in your project.


    OPTIONAL
    Optional plugins. You may choose whether to include it in your project or not.


    DEMONSTRATION
    This is to be removed, used for demonstration purposes only. This category must not be included in your project.


    SAMPLE
    Some script samples which explain how to initialize plugins or components. This category should not be included in your project.


    Detailed information and more samples can be found in the document.

    =================================================-->


</head>

<!--TIPS-->
<!--You may remove all ID or Class names which contain "demo-", they are only used for demonstration. -->
<body>
    <div id="container" class="effect aside-float aside-bright mainnav-lg">

        <!--NAVBAR-->
        <!--===================================================-->
        <header id="navbar">
            <div id="navbar-container" class="boxed">

                <!--Brand logo & name-->
                <!--================================-->
                <div class="navbar-header">
                    <a href="../../" class="navbar-brand">
                        <img src="../../img/logo.png" alt="Nifty Logo" class="brand-icon">
                        <div class="brand-title">
                            <span class="brand-text">SIRU</span>
                        </div>
                    </a>
                </div>
                <!--================================-->
                <!--End brand logo & name-->


                <!--Navbar Dropdown-->
                <!--================================-->
                <div class="navbar-content clearfix">
                    <ul class="nav navbar-top-links pull-left">

                        <!--Navigation toogle button-->
                        <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                        <li class="tgl-menu-btn">
                            <a class="mainnav-toggle" href="#">
                                <i class="demo-pli-view-list"></i>
                            </a>
                        </li>
                        <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                        <!--End Navigation toogle button-->

                    </ul>
                    <ul class="nav navbar-top-links pull-right">

                        <!--User dropdown-->
                        <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                        <li id="dropdown-user" class="dropdown">
                            <a href="#" data-toggle="dropdown" class="dropdown-toggle text-right">
                                <span class="ic-user pull-right">
                                    <!--<img class="img-circle img-user media-object" src="img/profile-photos/1.png" alt="Profile Picture">-->
                                    <i class="demo-pli-male"></i>
                                </span>
                                <div class="username hidden-xs">Reporter User</div>
                            </a>


                            <div class="dropdown-menu dropdown-menu-md dropdown-menu-right panel-default">


                                <!-- Dropdown footer -->
                                <div class="pad-all text-right">
                                    <a href="../../closeConnection/" class="btn btn-primary">
                                        <i class="demo-pli-unlock"></i> Salir!
                                    </a>
                                </div>
                            </div>
                        </li>
                        <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                        <!--End user dropdown-->

                    </ul>
                </div>
                <!--================================-->
                <!--End Navbar Dropdown-->

            </div>
        </header>
        <!--===================================================-->
        <!--END NAVBAR-->

        <div class="boxed">

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">
                <div id="page-head">

                    <!--Page Title-->
                    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                    <div id="page-title">
                        <h1 class="page-header text-overflow">Generar un nuevo reporte: Cuándo Ocurrió?</h1>

                    </div>
                    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                    <!--End page title-->
                </div>
                <div id="page-content">

									<div class="row">

  					    <div class="col-lg-12">
  					        <div class="panel">

                      <div class="row">

                        <div class="panel-heading">
                            <h3 class="panel-title">Estado del Reporte</h3>
                        </div>
                        <div class="col-sm-4 col-md-4">
                                <!-- Contact Widget -->
                                <!---------------------------------->
                                <div class="panel pos-rel">
                                    <div class="pad-all text-center">
                                        <div class="widget-control">

                                        </div>
                                        <a href="#">
                                            <img alt="Profile Picture" class="img-lg img-circle mar-ver" src="../../img/profile-photos/14.png">
                                            <p class="text-lg text-semibold mar-no text-main">Ubicación</p>
                                            <p class="text-sm">Ha sido seleccionada ubicación del reporte de manera exitosa.</p>

                                        </a>
                                    </div>
                                </div>
                                <!---------------------------------->
                        </div>

                        <div class="col-sm-4 col-md-4">
                                <!-- Contact Widget -->
                                <!---------------------------------->
                                <div class="panel pos-rel">
                                    <div class="pad-all text-center">
                                        <div class="widget-control">

                                        </div>
                                        <a href="#">
                                            <img alt="Profile Picture" class="img-lg img-circle mar-ver" src="../../img/profile-photos/13.png">
                                            <p class="text-lg text-semibold mar-no text-main">Fecha</p>
                                            <p class="text-sm">No han sido registradas fechas y horas asociadas al reporte.</p>

                                        </a>
                                    </div>
                                </div>
                                <!---------------------------------->
                        </div>

                        <div class="col-sm-4 col-md-4">
                                <!-- Contact Widget -->
                                <!---------------------------------->
                                <div class="panel pos-rel">
                                    <div class="pad-all text-center">
                                        <div class="widget-control">

                                        </div>
                                        <a href="#">
                                            <img alt="Profile Picture" class="img-lg img-circle mar-ver" src="../../img/profile-photos/13.png">
                                            <p class="text-lg text-semibold mar-no text-main">Detalles</p>
                                            <p class="text-sm">No se han registrado detalles del reporte.</p>

                                        </a>
                                    </div>
                                </div>
                                <!---------------------------------->
                        </div>

                      </div>
					        </div>
					    </div>
					</div>
                  <div class="row">
                    <div class="col-sm-12">
                        <!--Info Panel-->
                        <!--===================================================-->
                        <div class="panel panel-success">
                            <div class="panel-heading">
                                <h3 class="panel-title">Especifique la Fecha y la Hora</h3>
                            </div>
                            <div class="panel-body">

                              <!-- aca va la fecha y la hora en forma de formulario -->
                              <div class="row">
                                <div class="col-lg-2 col-lg-offset-3 col-md-offset-3 col-md-2 col-sm-offset3 col-sm-2">
                                  <label for="demo-dp-component">Fecha de Reporte</label>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4">
                                  <div id="dateValue">
                                      <div class="input-group date">
                                        <input type="text" class="form-control">
                                        <span class="input-group-addon"><i class="demo-pli-calendar-4"></i></span>
                                      </div>
                                  </div>
                                </div>
                              </div>

                              <br>
                              <div class="row">
                                <div class="col-lg-2 col-lg-offset-3 col-md-offset-3 col-md-2 col-sm-offset3 col-sm-2">
                                  <label for="demo-tp-com">Hora de Reporte</label>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4">
                                  <div class="input-group date">
					                                <input id="timeValue" type="text" class="form-control">
					                                <span class="input-group-addon"><i class="demo-pli-clock"></i></span>
                                  </div>
                                </div>
                              </div>

                              <br>
                              <div class="row">
                                <div class="col-lg-4 col-lg-offset-4 col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4">
                                    <button id="continueButton" class="btn btn-block btn-success">Guardar y Continuar</button>
                                </div>

                              </div>

                        </div>
                        <!--===================================================-->
                        <!--End Info Panel-->
                      </div>
                    </div>
                  </div>
                  <div class="row">

  					    <div class="col-lg-12">

                  <div class="row">

                    <div class="col-sm-12">

              <!--Info Panel-->
              <!--===================================================-->
              <div class="panel panel-success">
                  <div class="panel-heading">
                      <h3 class="panel-title">Resumen</h3>
                  </div>
                  <div class="panel-body">
                      <p>Qué Ocurrió?
                      <?php
                        echo "Reporte del tipo: ".$_REQUEST['category'];
                      ?>
                      </p>
                      <p>Dónde Ocurrió?
                        <?php
                          echo "Sector: ".$_REQUEST['sector']." en: ".$_REQUEST['subsector'];
                        ?>
                      </p>
                      <p>Cuándo Ocurrió?</p>

                  </div>
              </div>
              <!--===================================================-->
              <!--End Info Panel-->

          </div>
                  </div>
					    </div>
					</div>
        </div>
                <!--===================================================-->
                <!--End page content-->
            </div>
            <!--===================================================-->
            <!--END CONTENT CONTAINER-->


            <!--MAIN NAVIGATION-->
            <!--===================================================-->
            <nav id="mainnav-container">
                <div id="mainnav">

                    <!--Menu-->
                    <!--================================-->
                    <div id="mainnav-menu-wrap">
                        <div class="nano">
                            <div class="nano-content">

                                <!--Profile Widget-->
                                <!--================================-->
                                <div id="mainnav-profile" class="mainnav-profile">
                                    <div class="profile-wrap text-center">
                                        <div class="pad-btm">
                                            <img class="img-circle img-md" src="../../img/profile-photos/2.png" alt="Profile Picture">
                                        </div>
                                        <a href="#profile-nav" class="box-block" data-toggle="collapse" aria-expanded="false">
                                            <span class="pull-right dropdown-toggle">
                                                <i class="dropdown-caret"></i>
                                            </span>
                                            <p class="mnp-name">Reporter</p>
                                        </a>
                                    </div>
                                    <div id="profile-nav" class="collapse list-group bg-trans">

                                        <a href="../../closeConnection" class="list-group-item">
                                            <i class="demo-pli-unlock icon-lg icon-fw"></i> Salir
                                        </a>
                                    </div>
                                </div>




                                <ul id="mainnav-menu" class="list-group">

                                  <li class="list-header">Reportar</li>

                                  <li>
          						                <a href="../../reportar/">
          						                    <i class="fa fa-eye"></i>
          						                    <span class="menu-title">Crear un Reporte</span><i class="arrow"></i>
          						                </a>

          						            </li>

                                  <li class="list-header">Visualizar Reportes</li>

                                  <li>
          						                <a href="../../reportes/">
          						                    <i class="fa fa-file-archive-o"></i>
          						                    <span class="menu-title">Ver Reportes</span><i class="arrow"></i>
          						                </a>

          						            </li>

                                  <li>
          						                <a href="../../reportesCategorizados/">
          						                    <i class="fa fa-file-pdf-o"></i>
          						                    <span class="menu-title">Ver Reportes asignados a Eventos</span><i class="arrow"></i>
          						                </a>

          						            </li>

                                  <li>
          						                <a href="../../eventos/">
          						                    <i class="fa fa-filter"></i>
          						                    <span class="menu-title">Ver Eventos</span><i class="arrow"></i>
          						                </a>

          						            </li>

                                  <li>
          						                <a href="../../estadisticas/">
          						                    <i class="fa fa-bar-chart"></i>
          						                    <span class="menu-title">Ver Estadísticas</span><i class="arrow"></i>
          						                </a>

          						            </li>

						            </ul>

                    <!--================================-->
                    <!--End menu-->

                </div>
            </nav>
            <!--===================================================-->
            <!--END MAIN NAVIGATION-->

        </div>



        <!-- FOOTER -->
        <!--===================================================-->
        <footer id="footer">

            <!-- Visible when footer positions are fixed -->
            <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
            <div class="show-fixed pad-rgt pull-right">
                You have <a href="#" class="text-main"><span class="badge badge-danger">3</span> pending action.</a>
            </div>






            <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
            <!-- Remove the class "show-fixed" and "hide-fixed" to make the content always appears. -->
            <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

            <p class="pad-lft">&#0169; 2017 Grupo de Desarrollo Proyecto SIRU, DII, Universidad de Chile</p>



        </footer>
        <!--===================================================-->
        <!-- END FOOTER -->


        <!-- SCROLL PAGE BUTTON -->
        <!--===================================================-->
        <button class="scroll-top btn">
            <i class="pci-chevron chevron-up"></i>
        </button>
        <!--===================================================-->



    </div>
    <!--===================================================-->
    <!-- END OF CONTAINER -->


</body>
</html>
