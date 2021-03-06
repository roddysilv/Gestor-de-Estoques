<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package coral-light
 */
?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer grid-container" role="contentinfo">
		<div class="grid-100 tablet-grid-100 mobile-grid-100"><div class="sepline2"></div></div>
		<div class="egrid <?php coral_light_copyright_class(); ?>" id="footer-widget-copyright">
			<?php if ( is_active_sidebar( 'footer-copyright' ) ) dynamic_sidebar( 'footer-copyright' ); ?>
		</div>
		<div class="<?php coral_light_footer_link_class(); ?>">
			<a id="designer" class="alignright" href="https://www.coralthemes.com"><?php _e( 'Free wordpress themes', 'coral-light' ) ?></a>
		</div>
		
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
