package buttons.theme.liferay.portlet;//my.npm.angular.portlet.portlet;

import buttons.theme.liferay.constants.buttonsThemeLiferayKeys;
//my.npm.angular.portlet.constants.MyNpmAngularPortletKeys;

import com.liferay.portal.kernel.portlet.bridges.mvc.MVCPortlet;

import javax.portlet.Portlet;

import org.osgi.service.component.annotations.Component;

/**
 * @author a599898
 */
@Component(
	immediate = true,
	property = {
		"com.liferay.portlet.display-category=category.sample",
		"com.liferay.portlet.instanceable=true",
		"javax.portlet.display-name=buttons-theme-liferay Portlet",
		"javax.portlet.init-param.template-path=/",
		"javax.portlet.init-param.view-template=/view.jsp",
		"javax.portlet.name=buttonsThemeLiferayKeys.MyNpmAngular",
		"javax.portlet.resource-bundle=content.Language",
		"javax.portlet.security-role-ref=power-user,user"
	},
	service = Portlet.class
)

//??
public class buttonsThemeLiferay extends MVCPortlet {
}