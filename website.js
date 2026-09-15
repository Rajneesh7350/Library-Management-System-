function navigateFromSidebar(select) {
	if (select.value) {
		window.location.href = select.value;
	}
}

function renderStudentLayout() {
	if (!document.body.classList.contains("member-form")) {
		return;
	}

	if (document.querySelector(".sidebar-select, .admin_user")) {
		return;
	}

	document.querySelectorAll(".member-form > header, .member-form > aside").forEach((element) => element.remove());

	document.body.insertAdjacentHTML("afterbegin", `
		<header>
			<h1>Library Management System</h1>
			<i class="fa-solid fa-book-open" id="header-book"></i>
			<i class="fa-regular fa-bell" id="bell"></i>
			<i class="fa-solid fa-user" id="user"></i>
			<select class="admin_user" onchange="window.location.href = this.value">
				<option value="">Login</option>
				<option value="login_page.html">Admin</option>
			</select>
			<p>Manage Books, Students and Library Resources</p>
		</header>
		<aside class="sidebar">
			<ul>
				<li><a href="Home_page.html"><i class="fa-solid fa-chart-simple"></i> Dashboard</a></li>
				<li class="sidebar-menu-item"><div class="sidebar-menu-label"><i class="fa-solid fa-user-plus"></i><select onchange="navigateFromSidebar(this)"><option value="">Add member</option><option value="Add_student.html">Add Students</option><option value="Add_teacher.html">Add Teachers</option><option value="Add_other_member.html">Other members</option></select></div></li>
				<li class="sidebar-menu-item"><div class="sidebar-menu-label"><i class="fa-solid fa-user-minus"></i><select onchange="navigateFromSidebar(this)"><option value="">Remove member</option><option value="Remove_student.html">Remove Students</option><option value="Remove_teacher.html">Remove Teachers</option><option value="Remove_other_member.html">Other members</option></select></div></li>
				<li class="sidebar-menu-item"><div class="sidebar-menu-label"><i class="fa-solid fa-book"></i><select onchange="navigateFromSidebar(this)"><option value="">Books Issue</option><option value="Issue_student.html">Students</option><option value="Issue_teacher.html">Teacher</option><option value="Issue_other_member.html">Other members</option></select></div></li>
				<li class="sidebar-menu-item"><div class="sidebar-menu-label"><i class="fa-solid fa-rotate-left"></i><select onchange="navigateFromSidebar(this)"><option value="">Return Books</option><option value="Return_student.html">Students</option><option value="Return_teacher.html">Teacher</option><option value="Return_other_member.html">Other members</option></select></div></li>
				<li><a href="#"><i class="fa-solid fa-file-lines"></i> Report</a></li>
				<li><a href="#" class="help-link"><i class="fa-solid fa-circle-question help-icon"></i> Help</a></li>
				<li><a href="#"><i class="fa-solid fa-right-from-bracket"></i> Logout</a></li>
			</ul>
		</aside>`);

}

document.addEventListener("DOMContentLoaded", renderStudentLayout);
