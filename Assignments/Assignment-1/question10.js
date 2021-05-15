 function greetUser()
            {
                var name= document.getElementById("userName").value;
                var temp=name.toLowerCase();
                if((temp.localeCompare('alice')) == 0 || (temp.localeCompare('bob')) == 0)
                {
                    document.getElementById("result").innerHTML="Have a good day "+name+ "!";
                }
            }
            