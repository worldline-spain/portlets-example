<%@ include file="/init.jsp" %>

<link rel="stylesheet" type="text/css" href="/o/test5-integration-tema-liferay/node_modules/font-awesome@4.7.0/css/font-awesome.min.css"/> <!-- escape from the <link> -->
<link rel="stylesheet" type="text/css" href="/o/test5-integration-tema-liferay/node_modules/primeng-wl@5.2.1-SNAPSHOT6/resources/themes/omega/theme.css"/>
<link rel="stylesheet" type="text/css" href="/o/test5-integration-tema-liferay/node_modules/primeng-wl@5.2.1-SNAPSHOT6/resources/primeng.min.css"/>

<div id="<portlet:namespace />"></div>

<aui:script require="test5-integration-tema-liferay@1.0.0">
	test5IntegrationTemaLiferay100.default('#<portlet:namespace />');
</aui:script>