<!DOCTYPE html>

<html>
{{template "base/head.tpl" .}}
	
	<body class="">
		<!-- {{template "base/header.tpl" .}} -->
		{{template "base/navbar.tpl" .}}

		<div class="container plan">
			<div class="row">

				<div data-scroll-reveal="after 1.5s, enter right" class="window" id="cli-preview" data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true">
					<div class="window-content">
						<div class="cli" style="height: 299px;">
							<div class="cli-wrapper terminal">
								<div class="terminal-output">
									<div>
										<div style="width: 100%;">Start building static web apps with Divshot in seconds.</div>
									</div>
									<div>
										<div style="width: 100%;">Just type `divshot init` below to get started.</div>
									</div>
									<div>
										<div style="width: 100%;">&nbsp;</div>
									</div>
									<div>
										<div style="width: 100%;">
											<span>Type </span>
											<span data-text="divshot init" style="font-weight:bold;color:#fec600;">divshot init</span>
										</div>
									</div>
									<div>
										<div style="width: 100%;"> </div>
									</div>
								</div>
								<div class="cmd" style="width: 100%;">
									<span class="prompt">$&nbsp;</span>
									<span></span>
									<span class="cursor">&nbsp;</span>
									<span></span>
									<textarea class="clipboard"></textarea>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div>
					<input type="text">
					<button type="button" onclick="SendCmd();" caption="Send">Send</button>
				</div>
				
			</div>
		</div>
		
		{{template "base/footer.tpl" .}}
	</body>
</html>
