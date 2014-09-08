from django.conf.urls import patterns, include, url
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin

admin.autodiscover()

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^core/', include('indicadores.core.urls', namespace='core')),
    url(r'^indicador/', include('indicadores.indicador.urls', namespace='indicador')),
    url(r'', include('indicadores.login.urls', namespace='login')),
)

