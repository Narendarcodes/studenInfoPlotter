<?php include '../database/dbcnn.php'; ?>
<?php
$pin = $_GET['pin'];
$pin = strtoupper($pin);
$pin = htmlspecialchars($pin);
$pattern = "/22001-CS-/i";
if (preg_match($pattern, $pin) && isset($pin)) {
  $sql = "SELECT * FROM cse_22_25 WHERE Pin='$pin'; ";
  $result = mysqli_query($conn, $sql);
  $resultcheck = mysqli_num_rows($result);
  if ($resultcheck > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
      $name = $row["Name"];
      $section = $row["Section"];
      $mobile = $row["Mobile_Number"];
      $address = $row["Address"];
      $d_o_b = $row["D_O_B"];
      $seminar = $row["Seminar"];
      $describing_object = $row["Describing_Object"];
      $self_introduction1 = $row["Self_Introduction_01"];
      $self_introduction2 = $row["Self_Introduction_02"];
      $profile = $row["Profile"];
      $Presentation = $row["Presentation"];
    }
  } else {
    header("Location: ../error404.html");
    exit; 
  }
  mysqli_close($conn);
} else {
  mysqli_close($conn);
  header("Location:../index.php");
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=1534, initial-scale=1.0">
  <title>STUDENT PROFILE</title>
  <link rel="stylesheet" href="../css/profile.css">
  <link rel="stylesheet" href="../css/header&footer.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <script src="../js/profile2225.js"></script>
  <link rel="icon" type="image/x-icon" href="../images/icons/clgicon.png">
</head>

<body>
  <header>
    <div class="header">
      <div class="icon"><img src="..\images\icons/clgicon.png" alt="clgicon"></div>
      <div class="titles">
        <h1 id="govt">GOVERNMENT POLYTECHNIC,HYDERABAD</h1>
        <h2 id="add">Masabtank, Hyderabad, Telangana state-500028</h2>
        <h4 id="app">(Approved by AICTE New Delhi and Affiliated to SBTET Telangana State)</h4>
        <h2 id="dept">DEPARTMENT OF COMPUTER ENGINEERING</h2>
      </div>
  </header>
  <nav>
    <ul class="menu-bar">
      <a href="../batchpages/batch2225.php" id="home">
        <li>Home<span class="material-icons">home</span></li>
      </a>
      <a href="../index.php#searchbypin" id="searchbypin">
        <li>Search By Pin<span class="material-icons">search</span></li>
      </a>
      <a href="https://forms.gle/hgQfNucZfnPRigwKA">
        <li>Submit Form<span class="material-icons">description</span></li>
      </a>
      <a href="#quicklinks">
        <li>Quick Links<span class="material-icons">reorder</span></li>
      </a>
    </ul>
  </nav>
  <div class="card">
    <div class="left-container">
      <img src="<?php echo $profile; ?>" alt="Profile Image" id="pic">
      <h2 class="gradienttext"><?php echo $name; ?></h2>
      <p><?php echo $pin; ?></p>
    </div>
    <div class="right-container">
      <h3 class="gradienttext">Profile Details</h3>
      <table>
        <tr>
          <td>Name :</td>
          <td><?php echo $name; ?></td>
        </tr>
        <tr>
          <td>Pin :</td>
          <td><?php echo $pin; ?></td>
        </tr>
        <tr>
          <td>Section :</td>
          <td><?php echo $section; ?></td>
        </tr>
        <tr>
          <td>D.O.B :</td>
          <td><?php echo $d_o_b; ?></td>
        </tr>
        <tr>
          <td>Mobile :</td>
          <td><?php echo $mobile; ?></td>
        </tr>
        <tr>
          <td>Address :</td>
          <td><?php echo $address; ?></td>
        </tr>
      </table>
    </div>
  </div>
  <div class="assgtitl" id="assignmentcontainer">
    <h2>Assignments</h2>
    <div class="video-gallery">
      <div class="video-item" id="describing-object">
        <div class="video-wrapper">
          <iframe src="https://drive.google.com/file/d/<?php echo $describing_object; ?>/preview" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="title">Describing object</div>
      </div>
      <div class="video-item" id="seminar">
        <div class="video-wrapper">
          <iframe src="https://drive.google.com/file/d/<?php echo $seminar; ?>/preview" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="title">Seminar</div>
      </div>
      <div class="video-item" id="selfintroduction2">
        <div class="video-wrapper">
          <iframe src="https://drive.google.com/file/d/<?php echo $self_introduction2; ?>/preview" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="title">Self-Introduction-02</div>
      </div>
      <div class="video-item" id="selfintroduction1">
        <div class="video-wrapper">
          <iframe id="selfintro1" src="https://drive.google.com/file/d/<?php echo $self_introduction1; ?>/preview" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="title">Self-Introduction-01</div>
      </div>
      <div class="video-item" id="Presentation">
        <div class="video-wrapper">
          <iframe id="selfintro1" src="https://drive.google.com/file/d/<?php echo $Presentation; ?>/preview" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="title">Presentation</div>
      </div>
      <!-- Add more video items as needed  -->
    </div>
  </div>
  <div id="nothing"><span>Zero</span> Submission &#9785</div>
  <footer>
    <div class="footer">
      <div class="footerclgicon">
        <img src="../images/icons/clgicon.png" alt="clgicon">
        <h3>GOVT.POLYTECHNIC</h3>
        <h4>Hyderabad</h4>
      </div>
      <section id="quicklinks">
        <div class="quicklinks">
          <ul>
            <h2>Quick Links</h2>
            <li><a href="https://www.sbtet.telangana.gov.in/index.html#!/index" target="_blank">SBTET</a></li>
            <li><a href="http://polytechnicts.cgg.gov.in/masabtank.edu" target="_blank">GPT Masba Tank</a></li>
            <li><a href="https://www.sites.google.com/view/gptcmehyd/" target="_blank">CSE Department</a></li>
          </ul>
        </div>
      </section>
    </div>
    <div class="credit">
      <p style="font-size: 33px;">Designed and Developed by Narendar</p>
    </div>

  </footer>
</body>

</html>