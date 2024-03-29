package BookClub;

public package BookClub.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.czmud.bookclub.models.LoginUser;
import com.czmud.bookclub.models.User;
import com.czmud.bookclub.services.UserService;

@Controller
public class UserController {
	@Autowired
	private UserService userService;
	
	
	@GetMapping("/")
	public String index( Model model ) {
		
		model.addAttribute("newUser", new User());
		model.addAttribute("newLoginUser", new LoginUser());
		
		return "index.jsp";
	}
	
	@PostMapping("/users/create-new-user")
	public String createNewUser( @Valid @ModelAttribute("newUser") User newUser,
								 BindingResult bindingResult,
								 Model model,
								 HttpSession session) {
		
		newUser = userService.createNewUser( newUser, bindingResult );
		
		if( bindingResult.hasErrors() ) {
			model.addAttribute("newLoginUser", new LoginUser());
			session.invalidate();
			return "index.jsp";
		}
		
		Long userId = newUser.getId();
		session.setAttribute("userId", userId );
		
		return "redirect:/books";
	}
	
	@PostMapping("/users/log-user-in")
	public String logUserIn( @Valid @ModelAttribute("newLoginUser") LoginUser newLoginUser,
							 BindingResult bindingResult,
							 Model model,
							 HttpSession session) {
		
		if( bindingResult.hasErrors() ) {
			model.addAttribute("newUser", new User());
			session.invalidate();
			return "index.jsp";
		}
		
		User user = userService.login( newLoginUser, bindingResult );
		
		if( bindingResult.hasErrors() ) {
			model.addAttribute("newUser", new User());
			session.invalidate();
			return "index.jsp";
		}
		
				
		Long userId = user.getId();
		session.setAttribute("userId", userId ); 
		
		
		return "redirect:/books";
	}
	
	@GetMapping("/users/log-user-out")
	public String logUserOut( HttpSession session ) {
		
		session.invalidate();
		return "redirect:/";
	}
} usercontroller {
    
}
