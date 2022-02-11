precision highp float;
varying vec4 fPosition;
varying vec4 fColor;
varying vec2 fTexCoord;

uniform sampler2D sampler2d;
uniform float Factor1;
uniform float Factor2;
uniform float Factor3;

void main()
{	
	vec4 texColor = texture2D(sampler2d, fTexCoord);
	
	// Gen pattern based on screen coord
	// float r = abs(cos(gl_FragCoord.x * 0.1));
	// float g = abs(cos(gl_FragCoord.y * 0.1));
	// float b = abs(sin(gl_FragCoord.x + gl_FragCoord.y));
	// gl_FragColor = vec4(r, g, b, 1.0);

	// Gen pattern based on screen the pixel position
	float r = abs(cos(fPosition.x * 10.1));
	float g = abs(cos(fPosition.z * 10.1));
	float b = abs(sin(fPosition.x + fPosition.z));

	if (distance(fPosition.xz, vec2(0.0, 0.0)) < (0.3 + Factor2) && distance(fPosition.xz, vec2(0.0, 0.0)) > (0.0 + Factor2))
	{
		gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 ) + texColor;
	}
	// if (fPosition.x > -2.0 && fPosition.x < 2.0 && fPosition.z > -2.0 && fPosition.z < 2.0)
	// {
		// gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
	// }
	else if (distance(fPosition.xz, vec2(0.0, 0.0)) < (0.3 + Factor3) && distance(fPosition.xz, vec2(0.0, 0.0)) > (0.0 + Factor3))
	{
		gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 ) + texColor;
	}
	else
	{
		gl_FragColor = texColor;
	}
}