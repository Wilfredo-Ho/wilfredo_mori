
$(document).ready(function(){
	$("#form1").validate({
		// 调试模式，也就是说按下提交按钮的时候不会提交
		// debug:true,
		// rules的键是表达式中的name属性而不是id
		rules:{
			fName:{
				required:true,
				rangelength:[2,10],
			},
			lName:{
				required:true,
				rangelength:[2,10],
			},
			eAddr:{
				required:true,
				email:true,
			},
			subject:{
				required:true,
				digits:true,
				range:[2,12],
			}
		},
			// rules规则相应的提示信息
		messages:{
			fName:{
				required:"Input your first name",
				rangelength:"Range from 2 to 10 words",
			},
			lName:{
				required:"Input your last name",
				rangelength:"Range from 2 to 10 words",
			},
			eAddr:{
				required:"Input your email address",
				email:"Ensure the format",
			},
			subject:{
				required:"Input your number",
				digits:"It should be digits",
				range:"Range from 2 to 12 words",
			}
		}

	});
});